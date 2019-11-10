<template>    
    <div class="l-home">
        <Message></Message>
        <div class="p-sidebar">            
            <AuthAccount v-on:change-active-user="changeActiveUser($event)"></AuthAccount>
            <button class="c-btn p-sidebar__btn js-toggle-window"><i class="fas fa-key"></i></button>
        </div>
        <div class="p-menu-bar">
            <ul>
                <li class="c-hover p-menu-bar__item" v-on:click="moveEditUser"><i class="fas fa-user"></i>登録編集</li>
                <li class="c-hover p-menu-bar__item" v-on:click="logout"><i class="fas fa-sign-out-alt"></i>ログアウト</li>
            </ul>
        </div>
        
        <UserInfo v-if="show===true" :follower="follower" :friends="friends" :account_name="account_name" :description="description" :img_url="img_url"></UserInfo>
        
        <div v-if=" show===true ">
            <div class="p-status-wrap">
                <ul>
                    <li class="p-status__item c-hover c-btn__square-soft" :class="p_follow_status_toggle" v-on:click="changeFollowCronStatus">
                            <p><i class="far fa-handshake"></i> follow</p>
                            <p>
                            <span v-if=" AutoFollowCronStatus === '0' ">一時停止中...</span>
                            <span v-else-if=" AutoFollowCronStatus === '1' ">待機中...</span>
                            <span v-else-if=" AutoFollowCronStatus === '2' ">実行中...</span>                       
                            </p>
                        </li>
                    <li class="p-status__item c-hover c-btn__square-soft" :class="p_status_toggle" v-on:click="changeLikeCronStatus">
                            <p><i class="fas fa-heart"></i> like</p>
                            <p>
                            <span v-if=" AutoLikeCronStatus === '0' ">一時停止中...</span>
                            <span v-else-if=" AutoLikeCronStatus === '1' ">待機中...</span>
                            <span v-else-if=" AutoLikeCronStatus === '2' ">実行中...</span>                       
                            </p>
                        </li>               
                    <li class="p-status__item c-hover c-btn__square-soft" :class="p_unfollow_status_toggle" v-on:click="changeUnFollowCronStatus">
                            <p><i class="fas fa-heart-broken"></i> Unfollow</p>
                            <p>
                            <span v-if=" AutoUnFollowCronStatus === '0' ">一時停止中...</span>
                            <span v-else-if=" AutoUnFollowCronStatus === '1' ">待機中...</span>
                            <span v-else-if=" AutoUnFollowCronStatus === '2' ">実行中...</span>                       
                            </p>
                        </li>
                    <li class="p-status__item c-hover c-btn__square-soft" :class="p_mail_status_toggle" v-on:click="changeMailStatus">
                            <p><i class="fas fa-paper-plane"></i> Mail</p>
                            <p>
                            <span v-if=" MailStatus === '0' ">配信OFF</span>
                            <span v-else-if=" MailStatus === '1' ">配信ON</span>
                            </p>
                        </li>               
                </ul>
            </div>       
            <div class="p-main-area">
                <ListItem heading="follow" classname="p-heading__follow" v-bind:listItems="listItems_follow"></ListItem>
                <ListItem heading="like"  classname="p-heading__like" v-bind:listItems="listItems_like"></ListItem>
                <ListItem heading="unFollow"  classname="p-heading__unfollow" v-bind:listItems="listItems_unfollow"></ListItem>
                <ListItem heading="tweetschedule"  classname="p-heading__twtschedule" v-bind:listItems="listItems_schedule"></ListItem>
            </div>
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
            show:false,        
            follower: 0,
            friends: 0,
            account_name: '',
            description: '',
            img_url: '',
            listItems_like: [],
            listItems_schedule: [],
            listItems_follow:[],
            listItems_unfollow:[],
            AutoLikeCronStatus: '0',//自動イイネ機能の動作状態　0:停止中　1:待機中　2:実行中
            AutoFollowCronStatus: '0',//自動フォロー機能の動作状態　0:停止中　1:待機中　2:実行中
            AutoUnFollowCronStatus: '0',//自動アンフォロー機能の動作状態　0:停止中　1:待機中　2:実行中
            MailStatus: '0',//メール配信動作状態　0:配信OFF　1:配信ON
            p_status_toggle: {
                'p-btn_home-like--exec' : false,
                'p-btn_home-like--stay' : false,
            },
            p_follow_status_toggle: {
                'p-btn_home-follow--exec' : false,
                'p-btn_home-follow--stay' : false,
            },
            p_unfollow_status_toggle: {
                'p-btn_home-unfollow--exec' : false,
                'p-btn_home-unfollow--stay' : false,
            },
            p_mail_status_toggle: {
                'p-btn_home-mail--exec' : false,
            },
        }
    }, 
    created() {
        //ログインチェック結果
        controller.checkLogin_ajax()
        controller.$once('AJAX_COMPLETE_CHECKLOGIN', ($event) => {
            // console.log('DEBUG -- Home.vue --> ログインチェックが完了しました')
            // console.log($event.response.res)
            if($event.response.res === 'NOTLOGIN' ){
                //ログインユーザーでないためログイン画面に飛ばします。
                console.log('ログインユーザーでありません。')
                this.$router.push('/')
            }else{
                console.log('ログインユーザーです。')
                this.show = true
            }

        })
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

        //ログインチェック結果
        controller.checkLogin_ajax()
        controller.$once('AJAX_COMPLETE_CHECKLOGIN', ($event) => {
            // console.log('DEBUG -- Home.vue --> ログインチェックが完了しました')
            // console.log($event.response.res)
            if($event.response.res === 'NOTLOGIN' ){
                //ログインユーザーでないためログイン画面に飛ばします。
                console.log('ログインユーザーでありません。')
                this.$router.push('/')
            }else{
                console.log('ログインユーザーです。')
                this.show = true
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
            // console.log('DEBUG -- Home.vue --> いいね！をしたリストを更新します')
            // console.dir($event.response.rst)
            if($event.response.res === 'OK'){

                // console.dir($event.response.rst.length)
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
                // console.log('DEBUG -- Home.vue --> APIのリクエスト上限に達した可能性があります')

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
        controller.getFollowedList_ajax()
        controller.$on('AJAX_DISPLAY_AUTOFOLLOW_RESULT', ($event) => {
            // console.log('フォローリスト取得がかえててきた')
            // console.dir($event.response.rst)
            if($event.response.res === 'OK'){
                // console.log('DEBUG -- Home.vue --> フォローリストを更新します')
                // console.dir($event.response.rst)
                // console.dir($event.response.rst.length)
                const result = $event.response.rst
                const length = $event.response.rst.length
                that.listItems_follow=[] //listを初期化
                for(let i=0; i<length; i++){
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_follow.unshift({id: result[i]['id'], name:result[i]['name'], text:result[i]['text'], created_at:result[i]['created_at']})                          
                }

                //自動フォローを停止中にする
                // store.setAutoFollowCronStatus('0')
                // this.AutoFollowCronStatus = '0'
                // this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', false)
                // this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false)


                //次のフォロー開始時間を15分後に設定する
                const now = new Date()
                const now_ms = now.getTime();
                store.setNextFollowTime(now_ms + 905000, now_ms)//15分後に設定　5秒は気持ち

                //自動フォローを再開関数を開始する
                that.$crontab.enableJob('reStartAutoFollow')

                //フォロー数を更新する
                this.updateUserInfo()

                //メッセージ表示
                store.setMessage($event.response.msg, false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }

            }else if($event.response.res === 'LIMIT' || $event.response.res === 'FOLLOWLIMIT') {
                //'LIMIT':       ターゲットアカウントからのフォロワー取得制限に引っかかった場合
                //'FOLLOWLIMIT': フォロー上限に引っかかった場合
                //crontabで15分後にフォローを再開する
                //'FOLLOWLIMIT'の場合は15分で解除されないが、解除されていないともう一度ここに飛んでくるからとりあえず'LIMIT'と共通化
                
                //次のフォロー開始時間を15分後に設定する
                const now = new Date()
                const now_ms = now.getTime();
                store.setNextFollowTime(now_ms + 905000, now_ms)//15分後に設定　5秒は気持ち

                //自動フォローを再開関数を開始する
                const result = that.$crontab.enableJob('reStartAutoFollow')

                //リストを更新する
                const rst = $event.response.rst
                const length = $event.response.rst.length
                that.listItems_follow=[] //listを初期化
                for(let i=0; i<length; i++){
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_follow.unshift({id: rst[i]['id'], name:rst[i]['name'], text:rst[i]['text'], created_at:rst[i]['created_at']})                          
                }

                //フォロー数を更新する
                this.updateUserInfo()

                //メッセージ表示
                store.setMessage($event.response.msg, false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }

            }else if($event.response.res === 'UPDATED'){ //画面更新の場合に、すでにフォロー済リストを表示する
                // console.log('DEBUG -- Home.vue --> UPDATE フォローリストを更新します')
                // console.dir($event.response.rst)
                // console.dir($event.response.rst.length)
                const result = $event.response.rst
                const length = $event.response.rst.length
                that.listItems_follow=[] //listを初期化
                for(let i=0; i<length; i++){
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_follow.push({id: result[i]['id'], name:result[i]['name'], text:result[i]['text'], created_at:result[i]['created_at']})                          
                }
            }else if($event.response.res === 'SPAM'){

                //アカウントが停止された場合にここに来る
                //リストを更新して、すべての機能をoffにする

                // console.log('DEBUG -- Home.vue --> UPDATE フォローリストを更新します')
                // console.dir($event.response.rst)
                // console.dir($event.response.rst.length)
                const result = $event.response.rst
                const length = $event.response.rst.length
                that.listItems_follow=[] //listを初期化
                for(let i=0; i<length; i++){
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_follow.push({id: result[i]['id'], name:result[i]['name'], text:result[i]['text'], created_at:result[i]['created_at']})                          
                }

                //自動フォロー停止
                store.setAutoFollowCronStatus('0')
                this.AutoFollowCronStatus = '0'
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', false)
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false)

                //自動アンフォロー停止
                store.setAutoUnFollowCronStatus('0')
                this.AutoUnFollowCronStatus = '0'
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', false)
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', false)

                //自動いいね停止
                store.setAutoLikeCronStatus('0')
                this.AutoLikeCronStatus = '0'
                this.$set(this.p_status_toggle, 'p-btn_home-like--stay', false)
                this.$set(this.p_status_toggle, 'p-btn_home-like--exec', false)

                //メール送信停止
                store.setMailStatus('0')
                this.MailStatus = '0'
                this.$set(this.p_mail_status_toggle, 'p-btn_home-mail--exec', false)
                controller.changeMailStatus_ajax('0')


            }else{
                //メッセージ表示
                store.setMessage($event.response.msg, false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }

                //次のフォロー開始時間を15分後に設定する
                const now = new Date()
                const now_ms = now.getTime();
                store.setNextFollowTime(now_ms + 905000, now_ms)//15分後に設定　5秒は気持ち

                //自動フォローを再開関数を開始する
                const result = that.$crontab.enableJob('reStartAutoFollow')

                //自動フォローを停止中にする
                // store.setAutoFollowCronStatus('0')
                // this.AutoFollowCronStatus = '0'
                // this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', false)
                // this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false)

                //自動フォローが実行中の場合は実行する
                //that.$crontab.enableJob('startAutoFollow')
                
                
            }
            
        }) 

        //次のアンフォロー開始時間を1分後に設定する
        //最初は1分あける
        const now = new Date()
        const now_ms = now.getTime();
        store.setNextUnFollowTime(now_ms + 60000)//1分後に設定

        //自動アンフォローが完了したときにここにくる
        //正常にすべてのアンフォローが完了した⇒フォローしたアカウントのリストを更新する
        //制限にかかった⇒15分後にもう一度自動フォローを再開する
        //controller.startAutoUnFollow_ajax()
        controller.getUnFollowedList_ajax()
        controller.$on('AJAX_DISPLAY_AUTOUNFOLLOW_RESULT', ($event) => {
            // console.log('アンフォロー完了しました')
            // console.dir($event.response.rst)
            if($event.response.res === 'OK'){
                // console.log('DEBUG -- Home.vue --> アンフォローリストを更新します')
                // console.dir($event.response.rst)
                // console.dir($event.response.rst.length)
                const result = $event.response.rst
                const length = $event.response.rst.length
                that.listItems_unfollow=[] //listを初期化
                for(let i=0; i<length; i++){
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_unfollow.unshift({id: result[i]['id'], name:result[i]['name'], text:result[i]['text'], created_at:result[i]['created_at']})                          
                }

                //フォロワー数を更新する
                this.updateUserInfo()

                //メッセージ表示
                store.setMessage($event.response.msg, false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
                
                //アンフォローを15分後に再開する
                const now = new Date()
                const now_ms = now.getTime();
                store.setNextUnFollowTime(now_ms + 900000)//15分後に設定

                //自動アンフォローを再開関数を開始する
                that.$crontab.enableJob('startAutoUnFollow')

            }else if($event.response.res === 'LIMIT' || $event.response.res === 'UNFOLLOWLIMIT') {
                //'LIMIT':       ターゲットアカウントからのフォロワー取得制限に引っかかった場合
                //'FOLLOWLIMIT': フォロー上限に引っかかった場合
                //crontabで15分後にフォローを再開する
                //'FOLLOWLIMIT'の場合は15分で解除されないが、解除されていないともう一度ここに飛んでくるからとりあえず'LIMIT'と共通化

                //リストを更新する
                // console.dir($event.response.rst)
                // console.dir($event.response.rst.length)
                const rst = $event.response.rst
                const length = $event.response.rst.length
                that.listItems_unfollow=[] //listを初期化
                for(let i=0; i<length; i++){
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_unfollow.unshift({id: rst[i]['id'], name:rst[i]['name'], text:rst[i]['text'], created_at:rst[i]['created_at']})                          
                }

                //フォロワー数を更新する
                this.updateUserInfo()

                //メッセージ表示
                store.setMessage($event.response.msg, false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
                
                //次のフォロー開始時間を15分後に設定する
                const now = new Date()
                const now_ms = now.getTime();
                store.setNextUnFollowTime(now_ms + 905000, now_ms)//15分後に設定　5秒は気持ち

                //自動アンフォローを再開関数を開始する
                that.$crontab.enableJob('startAutoUnFollow')

            }else if($event.response.res === 'UPDATED'){ //画面更新の場合に、すでにフォロー済リストを表示する
                // console.log('DEBUG -- Home.vue --> UPDATE フォローリストを更新します')
                // console.dir($event.response.rst)
                // console.dir($event.response.rst.length)
                const result = $event.response.rst
                const length = $event.response.rst.length
                that.listItems_unfollow=[] //listを初期化
                for(let i=0; i<length; i++){
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_unfollow.push({id: result[i]['id'], name:result[i]['name'], text:result[i]['text'], created_at:result[i]['created_at']})                          
                }
            }else{
                //メッセージ表示
                store.setMessage($event.response.msg, false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }

                //自動アンフォローを停止中にする
                store.setAutoUnFollowCronStatus('0')
                this.AutoUnFollowCronStatus = '0'
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', false)
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', false)

                //次のフォロー開始時間を15分後に設定する
                const now = new Date()
                const now_ms = now.getTime();
                store.setNextUnFollowTime(now_ms + 905000, now_ms)//15分後に設定　5秒は気持ち
                //自動アンフォローが実行中の場合は実行する
                that.$crontab.enableJob('startAutoUnFollow')
                
            }
            
        }) 

        //自動フォローが実行中の場合は実行する
        // if(store.getAutoFollowCronStatus() !== '0') that.$crontab.enableJob('startAutoFollow')
        // if(store.getRestartAutoFollowCronStatus()) that.$crontab.enableJob('reStartAutoFollow')
        

        //予約ツイートを更新する
        controller.getTweetSchedule_ajax()
        controller.$on('AJAX_DISPLAY_SCHEDULE_RESULT', ($event) => {
            // console.log('DEBUG -- Home.vue --> ツイートスケジュールリストを更新します')
            if($event.response.rst !== null) {
                // console.dir($event.response.rst)
                // console.dir($event.response.rst.length)
                const result = $event.response.rst
                const length = $event.response.rst.length
                that.listItems_schedule=[] //listを初期化
                for(let i=0; i<length; i++){
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_schedule.unshift({id: result[i]['id'], name:'Schedule', text:result[i]['text'], created_at:result[i]['date']})                          
                }            
            }
        })

        //自動いいねのステータスを変更する
        controller.$on('AJAX_CHANGE_AUTOLIKESTATUS', ($event) => {
            // console.log('DEBUG -- Home.vue --> 自動いいねステータスを変更します')
            this.AutoLikeCronStatus = $event.response
            store.setAutoLikeCronStatus($event.response)
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
            // console.log('DEBUG -- Home.vue --> 自動フォローステータスを変更します')
            this.AutoFollowCronStatus = $event.response
            store.setAutoFollowCronStatus($event.response)
            if($event.response === '1'){
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false)
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', true)
            }else {
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', true)
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', false)
            }
        })
        
        //自動アンフォローのステータスを変更する
        controller.$on('AJAX_CHANGE_AUTOUNFOLLOWSTATUS', ($event) => {
            // console.log('DEBUG -- Home.vue --> 自動フォローステータスを変更します')
            this.AutoUnFollowCronStatus = $event.response
            store.setAutoUnFollowCronStatus($event.response)
            if($event.response === '1'){
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', false)
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', true)
            }else {
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', true)
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', false)
            }
        })
        

        //♡likeステータスをセットする
        // console.log('likeステータスは：'+store.getAutoLikeCronStatus())
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
        // console.log('followステータスは：'+store.getAutoFollowCronStatus())
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
        //unfollowステータスをセットする
        // console.log('Unfollowステータスは：'+store.getAutoUnFollowCronStatus())
        this.AutoUnFollowCronStatus = store.getAutoUnFollowCronStatus()
        if(this.AutoUnFollowCronStatus === '0'){
            this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', false)
            this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', false)
        }else if(this.AutoUnFollowCronStatus === '1'){
            this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', false)
            this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', true)
        }else{
            this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', true)
            this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', false)
        }
        //メールは配信のステータスをセットする
        // console.log('メールステータスは：'+store.getMailStatus())
        this.MailStatus = store.getMailStatus()
        if(this.MailStatus === '0'){
            this.$set(this.p_mail_status_toggle, 'p-btn_home-mail--exec', false)
        }else if(this.MailStatus === '1'){
            this.$set(this.p_mail_status_toggle, 'p-btn_home-mail--exec', true)
        }

    },
    methods: {
        changeActiveUser($event){
            console.log($event.active_user)
            const screen_name = $event.active_user
            //親コンポーネントにアクティブユーザーを渡す 
            controller.getTwitterProfile_ajax(screen_name)
            controller.$once('AJAX_COMPLETE_GETTWITTERPROFILE', ($event) => {
                console.log('フロントに帰ってきたデータ↓ プロフィール')
                console.dir($event.response.rst)
                if($event.response.res === 'OK'){
                    //取得成功時はUser領域更新
                    this.follower = $event.response.rst.followers_count //フォロワー数
                    this.friends = $event.response.rst.friends_count    //フォロー数
                    this.account_name = $event.response.rst.name        //アカウント名
                    this.description = $event.response.rst.description  //プロフィール文
                    this.img_url = $event.response.rst.profile_image_url_https //画像URL

                    //フォロー数をstoreに格納
                    store.setFriendsCount($event.response.rst.friends_count)

                    //followList更新
                    controller.getFollowedList_ajax()
                    //unfollowList更新
                    controller.getUnFollowedList_ajax()
                    //予約ツイートを更新する
                    controller.getTweetSchedule_ajax()
                    //いいねリストを更新する
                    controller.getLikedListSession_ajax()

                }else if($event.response.res ==='NOTLOGIN'){
                        console.log('ログインユーザーでないためログイン画面に飛ばします')          
                        this.$router.push('/')  
                }else{
                    //失敗したときはメッセージ表示
                    //メッセージ表示

                    store.setMessage('プロフィールの取得に失敗。アクセス制限orネット環境が悪い可能性があります', false)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }
                }
            })
        },
        //自動いいねの状態を変更する
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
        //自動フォローの状態を変更する
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
        //自動アンフォローの状態を変更する
        changeUnFollowCronStatus() {            
            if(this.AutoUnFollowCronStatus === '0'){
                store.setAutoUnFollowCronStatus('1')
                this.AutoUnFollowCronStatus = '1'
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', false)
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', true)
            }else if(this.AutoUnFollowCronStatus === '1') {
                store.setAutoUnFollowCronStatus('0')
                this.AutoUnFollowCronStatus = '0'
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', false)
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', false)
            }else if(this.AutoUnFollowCronStatus === '2') {
                //実行中の場合はステータスを変更できないようにする
            }
            
        },

        //メール配信状態を変更する
        changeMailStatus() {            
            if(this.MailStatus === '0'){
                store.setMailStatus('1')
                this.MailStatus = '1'
                this.$set(this.p_mail_status_toggle, 'p-btn_home-mail--exec', true)
                controller.changeMailStatus_ajax('1')
                controller.$once('AJAX_FINISH_CHANGE_MAILSTATUS', ($event) => {
                    if($event.response === false){                        
                        store.setMessage('メール配信状態の変更に失敗しました。', false)
                        const message = store.getMessage();
                        if(message.msg !== ''){
                            controller.emit_message(message)  
                        }
                        //配信状態を停止にする
                        store.setMailStatus('0')
                        this.MailStatus = '0'
                        this.$set(this.p_mail_status_toggle, 'p-btn_home-mail--exec', false)
                    }

                })
            }else if(this.MailStatus === '1') {
                store.setMailStatus('0')
                this.MailStatus = '0'
                this.$set(this.p_mail_status_toggle, 'p-btn_home-mail--exec', false)
                controller.changeMailStatus_ajax('0')
                controller.$once('AJAX_FINISH_CHANGE_MAILSTATUS', ($event) => {
                    if($event.response === false){                        
                        store.setMessage('メール配信状態の変更に失敗しました。', false)
                        const message = store.getMessage();
                        if(message.msg !== ''){
                            controller.emit_message(message)  
                        }
                        //配信状態を配信ONにする
                        store.setMailStatus('1')
                        this.MailStatus = '1'
                        this.$set(this.p_mail_status_toggle, 'p-btn_home-mail--exec', true)
                    }

                })
            }
            
        },

        updateUserInfo() {
            controller.getTwitterProfile_ajax('screen_name')
            controller.$once('AJAX_COMPLETE_GETTWITTERPROFILE', ($event) => {
                // console.log('フロントに帰ってきたデータ↓ プロフィール')
                // console.dir($event.response.rst)
                if($event.response.res === 'OK'){
                    //取得成功時はUser領域更新
                    this.follower = $event.response.rst.followers_count //フォロワー数
                    this.friends = $event.response.rst.friends_count    //フォロー数
                    this.account_name = $event.response.rst.name        //アカウント名
                    this.description = $event.response.rst.description  //プロフィール文   
                    this.img_url = $event.response.rst.profile_image_url_https //画像URL

                    //フォロー数をstoreに格納
                    store.setFriendsCount($event.response.rst.friends_count)

                }else if($event.response.res ==='NOTLOGIN'){
                    console.log('ログインユーザーでないためログイン画面に飛ばします')          
                    this.$router.push('/')  
                }else{
                    //失敗したときはメッセージ表示
                    //メッセージ表示

                    store.setMessage('プロフィールの取得に失敗。アクセス制限orネット環境が悪い可能性があります', false)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }
                }
            })
        },

        logout(){
            controller.logout_ajax()
            controller.$once('AJAX_FINISH_LOGOUT_RESULT', ($event) => {
                if($event.response.res === true){
                     //メッセージ表示
                    store.setMessage('ログアウトしました', true)
                    this.$router.push('/')
                }else{
                    //メッセージ表示
                    store.setMessage('ログアウトに失敗しました', false)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }
                }                
            })

        },
        moveEditUser() {
            this.$router.push('/edituser')
        }
    }

}



</script>

