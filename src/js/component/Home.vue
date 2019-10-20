<template>    
    <div class="l-home">
        <Message></Message>
        <div class="p-sidebar">            
            <AuthAccount v-on:change-active-user="changeActiveUser($event)"></AuthAccount>
            <button class="c-btn p-sidebar__btn js-toggle-window"><i class="fas fa-key"></i></button>
        </div>
        
        <UserInfo :follower="follower" :friends="friends" :account_name="account_name" :description="description" :img_url="img_url"></UserInfo>
       
       <div class="p-status-wrap">
           <ul>
               <li class="c-btn p-status__item" :class="p_follow_status_toggle" v-on:click="changeFollowCronStatus">
                    <p><i class="far fa-handshake"></i> follow</p>
                    <p>
                       <span v-if=" AutoFollowCronStatus === '0' ">一時停止中...</span>
                       <span v-else-if=" AutoFollowCronStatus === '1' ">待機中...</span>
                       <span v-else-if=" AutoFollowCronStatus === '2' ">実行中...</span>                       
                    </p>
                </li>
               <li class="c-btn p-status__item" :class="p_status_toggle" v-on:click="changeLikeCronStatus">
                    <p><i class="fas fa-heart"></i> like</p>
                    <p>
                       <span v-if=" AutoLikeCronStatus === '0' ">一時停止中...</span>
                       <span v-else-if=" AutoLikeCronStatus === '1' ">待機中...</span>
                       <span v-else-if=" AutoLikeCronStatus === '2' ">実行中...</span>                       
                    </p>
                </li>               
           </ul>
       </div>       
       <div class="p-main-area">
        <ListItem heading="follow" classname="p-heading__follow" v-bind:listItems="listItems_follow"></ListItem>
        <ListItem heading="like"  classname="p-heading__like" v-bind:listItems="listItems_like"></ListItem>
        <ListItem heading="unFollow"  classname="p-heading__unfollow"></ListItem>
        <ListItem heading="tweetschedule"  classname="p-heading__twtschedule" v-bind:listItems="listItems_schedule"></ListItem>
       </div>
       
    </div>
    
</template>

<script>
import path from 'path';
import userinfo from './UserInfo.vue'
import todolist from './KeywordList.vue'
import listitem from './Listitem.vue'
import authaccount from './AuthAccount.vue'
import message from './message.vue'
import controller from './Controller.vue'
import store from './Store.vue'
import $ from 'jquery'
import _ from 'lodash';


export default {
    components: {
        UserInfo: userinfo,
        ListItem: listitem,
        AuthAccount: authaccount,
        Message: message,
    },
    data: function(){
        return {            
            follower: 0,
            friends: 0,
            account_name: '',
            description: '',
            img_url: '',
            listItems_like: [],
            listItems_schedule: [],
            listItems_follow:[],
            AutoLikeCronStatus: '0',//自動イイネ機能の動作状態　0:停止中　1:待機中　2:実行中
            AutoFollowCronStatus: '0',//自動フォロー機能の動作状態　0:停止中　1:待機中　2:実行中
            p_status_toggle: {
                'p-btn_home-like--exec' : false,
                'p-btn_home-like--stay' : false,
            },
            p_follow_status_toggle: {
                'p-btn_home-follow--exec' : false,
                'p-btn_home-follow--stay' : false,
            },
        }
    }, 
    
    mounted: function(){
        let that=this

        //jquery設置
        $('.js-toggle-window').on('click', function () {
            if ($('.p-sidebar').hasClass('open')) {
            $('.p-sidebar').removeClass('open');
            // $('.p-sidebar').css('left','-300px');
            } else {
            $('.p-sidebar').addClass('open');
            // $('.p-sidebar').css('left','0');
            }
        })

        //メッセージがセットされていれば表示する
        const message = store.getMessage();
        if(message.msg !== ''){
            controller.emit_message(message)  
        }

        //いいねの処理が完了したときにここにくる
        //いいねしたツイートの一覧を表示する
        controller.getLikedListSession_ajax()
        controller.$on('AJAX_DISPLAY_AUTOLIKE_RESULT', ($event) => {
            console.log('DEBUG -- Home.vue --> いいね！をしたリストを更新します')
            console.dir($event.response.rst)
            if($event.response.rst){

                console.dir($event.response.rst.length)
                const result = $event.response.rst
                const length = $event.response.rst.length
                that.listItems_like=[] //listを初期化
                for(let i=0; i<length; i++){
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_like.unshift({id: result[i]['id'], name:result[i]['name'], text:result[i]['text'], created_at:result[i]['created_at']})                          
                }

            }else if($event.response.rst == null){//いいねのリクエストがすべて失敗した場合はnullが返る。リクエスト上限の可能性が高い
                //レスポンスがnullの場合はAPIのリクエスト上限と判断する
                //自動イイネを一時停止状態にして、メッセージで表示する
                console.log('DEBUG -- Home.vue --> APIのリクエスト上限に達した可能性があります')

                //自動いいねを停止状態にする
                this.AutoLikeCronStatus =  '0'
                store.setAutoLikeCronStatus('0')
                this.$set(this.p_status_toggle, 'p-btn_home-like--exec', false)
                this.$set(this.p_status_toggle, 'p-btn_home-like--stay', false)
                

                //メッセージ表示
                store.setMessage('いいね制限、あるいは通信環境に問題がある可能性あります。いいねを一時停止します。', false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }

            }else{//通常のエラーフロー
                //メッセージ表示
                store.setMessage($event.response.msg, false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
            }
        })


        //自動フォローが完了したときにここにくる
        //正常にすべてのフォローが完了した⇒フォローしたアカウントのリストを更新する
        //制限にかかった⇒15分後にもう一度自動フォローを再開する
        controller.getFollowedListSession_ajax()
        controller.$on('AJAX_DISPLAY_AUTOFOLLOW_RESULT', ($event) => {
            if($event.response.res === 'OK'){
                console.log('DEBUG -- Home.vue --> フォローリストを更新します')
                console.dir($event.response.rst)
                console.dir($event.response.rst.length)
                const result = $event.response.rst
                const length = $event.response.rst.length
                that.listItems_follow=[] //listを初期化
                for(let i=0; i<length; i++){
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_follow.unshift({id: result[i]['id'], name:result[i]['screen_name'], text:'', created_at:result[i]['created_at']})                          
                }
                //自動フォローを再開関数を開始する
                that.$crontab.enableJob('reStartAutoFollow')

            }else if($event.response.res === 'LIMIT' || $event.response.res === 'FOLLOWLIMIT') {
                //'LIMIT':       ターゲットアカウントからのフォロワー取得制限に引っかかった場合
                //'FOLLOWLIMIT': フォロー上限に引っかかった場合
                //crontabで15分後にフォローを再開する
                //'FOLLOWLIMIT'の場合は15分で解除されないが、解除されていないともう一度ここに飛んでくるからとりあえず'LIMIT'と共通化
                
                //次のフォロー開始時間を15分後に設定する
                const now = new Date()
                const now_ms = now.getTime();
                store.setNextFollowTime(now_ms + 905000)//15分後に設定　5秒は気持ち

                console.log('自動フォロー再開ジョブをスタートします')
                //自動フォローを再開関数を開始する
                const result = that.$crontab.enableJob('reStartAutoFollow')
                console.log("enableJob('reStartAutoFollow'):"+result)

                //リストを更新する
                console.dir($event.response.rst)
                console.dir($event.response.rst.length)
                const rst = $event.response.rst
                const length = $event.response.rst.length
                that.listItems_follow=[] //listを初期化
                for(let i=0; i<length; i++){
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_follow.unshift({id: rst[i]['id'], name:rst[i]['name'], text:rst[i]['text'], created_at:rst[i]['created_at']})                          
                }


                //メッセージ表示
                store.setMessage($event.response.msg, false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }

            }else if($event.response.res === 'UPDATE'){ //画面更新の場合に、すでにフォロー済リストを表示する
                console.log('DEBUG -- Home.vue --> UPDATE フォローリストを更新します')
                console.dir($event.response.rst)
                console.dir($event.response.rst.length)
                const result = $event.response.rst
                const length = $event.response.rst.length
                that.listItems_follow=[] //listを初期化
                for(let i=0; i<length; i++){
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_follow.unshift({id: result[i]['id'], name:result[i]['screen_name'], text:'', created_at:result[i]['created_at']})                          
                }
            }else{
                //メッセージ表示
                store.setMessage($event.response.msg, false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }

                //自動フォローを停止中にする
                store.setAutoFollowCronStatus('0')
                this.AutoFollowCronStatus = '0'
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', false)
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false)

                //自動フォローが実行中の場合は実行する
                that.$crontab.enableJob('startAutoFollow')
                
                
            }
            
        }) 

        //自動フォローが実行中の場合は実行する
        if(store.getAutoFollowCronStatus() !== '0') that.$crontab.enableJob('startAutoFollow')
        if(store.gettRestartAutoFollowCronStatus()) that.$crontab.enableJob('reStartAutoFollow')
        

        //予約ツイートを更新する
        controller.getTweetSchedule_ajax()
        controller.$on('AJAX_DISPLAY_SCHEDULE_RESULT', ($event) => {
            console.log('DEBUG -- Home.vue --> ツイートスケジュールリストを更新します')
            console.dir($event.response.rst)
            console.dir($event.response.rst.length)
            const result = $event.response.rst
            const length = $event.response.rst.length
            that.listItems_schedule=[] //listを初期化
            for(let i=0; i<length; i++){
                //DBから取得したList情報をdatasに格納する
                //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                //HOME画面で上から時系列順に並ぶようにする
                that.listItems_schedule.unshift({id: result[i]['id'], name:'Schedule', text:result[i]['text'], created_at:result[i]['date']})                          
            }            
        })

        //自動いいねのステータスを変更する
        controller.$on('AJAX_CHANGE_AUTOLIKESTATUS', ($event) => {
            console.log('DEBUG -- Home.vue --> 自動いいねステータスを変更します')
            this.AutoLikeCronStatus = $event.response
            if($event.response === '1'){
                this.$set(this.p_status_toggle, 'p-btn_home-like--exec', false)
                this.$set(this.p_status_toggle, 'p-btn_home-like--stay', true)
            }else {
                this.$set(this.p_status_toggle, 'p-btn_home-like--exec', true)
                this.$set(this.p_status_toggle, 'p-btn_home-like--stay', false)
            }
        })

        //自動フォローのステータスを変更する
        controller.$on('AJAX_CHANGE_AUTOFOLLOWSTATUS', ($event) => {
            console.log('DEBUG -- Home.vue --> 自動フォローステータスを変更します')
            this.AutoFollowCronStatus = $event.response
            if($event.response === '1'){
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false)
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', true)
            }else {
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', true)
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', false)
            }
        })

        //Home画面に来た時、リストが初期化されているから、1sでいいね動作を開始する
        //1sでリスト更新される
        // const result = this.$crontab.enableJob('startAutoLike1')
        // console.log("enableJob('startAutoLike1'):"+result)

        //♡likeステータスをセットする
        this.AutoLikeCronStatus = store.getAutoLikeCronStatus()
        if(this.AutoLikeCronStatus === '0'){
            this.$set(this.p_status_toggle, 'p-btn_home-like--exec', false)
            this.$set(this.p_status_toggle, 'p-btn_home-like--stay', false)
        }else if(this.AutoLikeCronStatus === '1'){
            this.$set(this.p_status_toggle, 'p-btn_home-like--exec', false)
            this.$set(this.p_status_toggle, 'p-btn_home-like--stay', true)
        }else{
            this.$set(this.p_status_toggle, 'p-btn_home-like--exec', true)
            this.$set(this.p_status_toggle, 'p-btn_home-like--stay', false)

        }
        //followステータスをセットする
        this.AutoFollowCronStatus = store.getAutoFollowCronStatus()
        if(this.AutoFollowCronStatus === '0'){
            this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false)
            this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', false)
        }else if(this.AutoFollowCronStatus === '1'){
            this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false)
            this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', true)
        }else{
            this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', true)
            this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', false)

        }
        

        
    },
    methods: {        
        changeActiveUser($event){
            console.log($event.active_user)
            const screen_name = $event.active_user
            //親コンポーネントにアクティブユーザーを渡す 
            controller.getTwitterProfile_ajax(screen_name)
            controller.$once('AJAX_COMPLETE_GETTWITTERPROFILE', ($event) => {
                console.log('フロントに帰ってきたデータ↓')
                const body = JSON.parse($event.response.rst.body)
                console.dir(body.description)
                this.follower = body.followers_count //フォロワー数
                this.friends = body.friends_count    //フォロー数
                this.account_name = body.name        //アカウント名
                this.description = body.description  //プロフィール文   
                this.img_url = body.profile_image_url_https //画像URL
            })
        },
        changeLikeCronStatus() {            
            if(this.AutoLikeCronStatus === '0'){
                store.setAutoLikeCronStatus('1')
                this.AutoLikeCronStatus = '1'
                this.$set(this.p_status_toggle, 'p-btn_home-like--exec', false)
                this.$set(this.p_status_toggle, 'p-btn_home-like--stay', true)
            }else if(this.AutoLikeCronStatus === '1') {
                store.setAutoLikeCronStatus('0')
                this.AutoLikeCronStatus = '0'
                this.$set(this.p_status_toggle, 'p-btn_home-like--stay', false)
                this.$set(this.p_status_toggle, 'p-btn_home-like--exec', false)
            }else if(this.AutoLikeCronStatus === '2') {
                //実行中の場合はステータスを変更できないようにする
            }
            
        },
        changeFollowCronStatus() {            
            if(this.AutoFollowCronStatus === '0'){
                store.setAutoFollowCronStatus('1')
                this.AutoFollowCronStatus = '1'
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false)
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', true)
            }else if(this.AutoFollowCronStatus === '1') {
                store.setAutoFollowCronStatus('0')
                this.AutoFollowCronStatus = '0'
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', false)
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false)
            }else if(this.AutoFollowCronStatus === '2') {
                //実行中の場合はステータスを変更できないようにする
            }
            
        },
    }

}



</script>

