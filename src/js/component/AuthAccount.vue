<template>    
    <div class="l-subPage">     
        <div class="u-txt_center">
        <button v-on:click="CertifyAccount" class="c-btn">アカウント認証する</button>
        </div>
        <div class="loading" v-if="loading">認証処理中...</div>
        <div v-if="error" class="error">{{ error }}</div>

        <AccountListComponent v-bind:listItems="makeDatas()" v-on:delete-item="deleteItem($event)" v-on:change-active-user="changeActiveUser($event)"></AccountListComponent>
        
    </div>
</template>

<script>
import accountlist from './AccountList.vue'
import _ from 'lodash';
import controller from './Controller.vue'
import store from './Store.vue'


export default {
    components: {
        AccountListComponent: accountlist,
    },
    data: function(){
        return {
            datas: [],      //
            searchText: '', //
            loading:false,  //
            post: null,     //
            error:null,     //
            activeUser: '', //現在選択しているアカウント
        }
    },      
    created () {
        // view が作られた時にデータを取得し、
        // そのデータは既に監視されている
        this.fetchData()
        //this.updateAccount()
    },
    watch: {
        // ルートが変更されたらこのメソッドを再び呼び出します
        //'$route': 'fetchData'
    },
    methods: {
        makeDatas() {
            // 今のリスト項目を退避
            const datas_ = Object.assign([],this.datas)
            return (this.searchText == '') ? this.datas : ''
        },
        deleteItem(id) {
            //データベース上のアカウント情報を削除する            
            let delete_data = _.filter(this.datas, {'id': id.listId})
            
            this.datas = _.reject(this.datas, { 'id': id.listId })

            controller.deleteAccount_ajax(delete_data[0].account)            
            controller.$on('AJAX_COMPLETE_DELETEACCOUNT', ($event) => {

                if($event.response.res === 'OK'){
                    // console.log('リクエストに成功しました')
                    // console.dir($event.response)
                    store.setMessage($event.response.msg, true)

                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }
                }else {
                    store.setMessage('サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。', false)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }

                }
                
            })

        },
        addItem(account_list) {
            let that = this
            Object.keys(account_list).forEach(function(key) {
                that.datas.push({id: that.getId(),  account:this['screen_name'], isActive: false})
            }, account_list)
            this.makeDatas();
        },
        filterCollection(elm) {
            const regexp = new RegExp('^' + this.searchText, 'i');
            return (elm.text.match(regexp));
        },
        CertifyAccount() {
            this.loading = true
            controller.certify_ajax()            
            controller.$on('AJAX_COMPLETE_GETREQUEST', ($event) => {

                if($event.response.res === 'OK'){
                    // console.log('リクエストに成功しました')
                    // console.dir($event.response)
                    const url = $event.response.url
                    // this.$router.push(url)
                    window.location.href = url;
                }else {

                    store.setMessage($event.response.msg, false)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }

                }
                
            })
        },
        fetchData () {
            console.log('fetchdataに来たよ！')
            this.loading = false
            this.error = this.post = null           

            const denied = this.getParam('denied')
            const oauth_token = this.getParam('oauth_token')
            const oauth_verifier = this.getParam('oauth_verifier')

            if(!(_.isNil(denied))){
                //認証をキャンセルした場合
                this.loading = false
                store.setMessage('認証に失敗しました',false)
            }else if( !(_.isNil(oauth_token)) && !(_.isNil(oauth_verifier))){
                //認証処理に成功した場合
                this.loading = false
                controller.saveToken_ajax(oauth_token, oauth_verifier)
                controller.$once('AJAX_COMPLETE_CERTIFY', ($event) => {
                    // console.log('フロントに帰ってきたデータ↓')
                    // console.dir($event.response)

                    //認証したアカウントのリストを更新する
                    this.updateAccount();
                    
                    // メッセージ表示
                    store.setMessage('認証に成功しました',true)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }

                    //URLからGETパラメータを取り除く
                    history.pushState(null, null, "/")
                })
            }else{
                //HOME画面に遷移したとき、HOME画面を更新したときにここにはいる
                //このときはupdateAccountをする
                this.updateAccount()
            }

        },
        updateAccount() {
            //thisを退避
            const that = this
            //認証処理に成功した場合
            this.loading = false
            controller.updateAccount_ajax()
            controller.$once('AJAX_COMPLETE_GETACCOUNT', ($event) => {
                // console.log('フロントに帰ってきたデータ↓')
                // console.dir($event.response)

                if($event.response.res === 'OK'){
                    // メッセージ表示
                    for(let i=0;i<$event.response.screen_name.length;i++){
                        this.addItem($event.response.screen_name[i])
                    }

                }else {

                }
                
                
            })
        },
        changeActiveUser($event){
            console.log($event.active_user)
            this.activeUser = $event.active_user
            //親コンポーネントにアクティブユーザーを渡す
            this.$emit('change-active-user', {active_user:$event.active_user})
        },
        //GETパラメータの値を取得する
        getParam(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        },
        getId() {
            var strong = 1000;
            return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16);
        }
    }

}




</script>