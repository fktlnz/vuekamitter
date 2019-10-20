<template>    
    <div class="l-subPage p-targetacnt-wrap">
        <Message></Message>
        <div class="txt_center"><span class="c-title p-heading__follow">ターゲットアカウント登録</span></div>
        <InputForm v-on:onChange="onChange($event)" type="text" label="" name="text" placeholder="@のあとのアカウントIDを入力(例. kazukichi3110)"></InputForm>
        <div class="txt_right">
            <button v-on:click="addItem"  class="c-btn">追加</button>
        </div>
        <KeywordListComponent v-bind:listItems="datas" v-on:delete-item="deleteItem($event)" type="target"></KeywordListComponent>
        
    </div>
</template>

<script>
import keywordlist from './KeywordList.vue'
import inputform from './InputForm.vue'
import store from './Store.vue'
import controller from './Controller.vue'
import message from './message.vue'
import _ from 'lodash';



export default {
    components: {
        KeywordListComponent: keywordlist,
        InputForm: inputform,
        Message: message,
    },
    data: function(){
        return {
            datas: [
                {
                    id: 1,
                    text: 'a',
                }
            ],
            screen_name: '',
            IsExist:false,//アカウントが存在しているかどうか
            
        }
    },   
    mounted() {
        this.updateDatas()
    },
    methods: {
        onChange(event) {            
            console.log(event.input.value);            
            this.screen_name = event.input.value
        },
        deleteItem(id) {
            controller.deleteUserAccount_ajax(id.listId, 0)//引数(キーワードID, スクリーンネーム　, キーワードタイプ（0:ターゲットアカウント 1:フォロー済アカウント　2:アンフォローアカウント）)
            controller.$once('AJAX_COMPLETE_DELETETARGETACCOUNT', ($event) => {

                if($event.response.res === 'OK'){
                    console.log('リクエストに成功しました. AJAX_COMPLETE_DELETETARGETACCOUNT') 
                     //メッセージ表示
                    store.setMessage($event.response.msg, true)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }

                    this.datas = _.reject(this.datas, { 'id': id.listId });

                }else {
                    this.loading = false
                    console.log('リクエストに失敗しました')

                    //メッセージ表示
                    store.setMessage($event.response.msg, false)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }

                }
                
            }) 
        },
        addItem(event) {
            //キーワード未入力の場合
            if(this.screen_name === ''){
                //メッセージ表示
                store.setMessage('キーワードを入力してください', false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
                return
            }

            //入力されたアカウントが存在するかチェックする
            controller.CheckUserAccountExist_ajax(this.screen_name)
            controller.$once('AJAX_COMPLETE_CHECKUSERACCOUNTEXIST', ($event) => {

                if($event.response.res === 'OK'){
                    console.log('リクエストに成功しました. AJAX_COMPLETE_CHECKUSERACCOUNTEXIST')
                    console.log('取得に成功：アカウント存在or存在しない')
                    console.dir($event.response.rst)  
                    this.IsExist=true
                    if(!$event.response.rst){
                        console.log('存在しないルートに来ているよ')
                        //rstがfalseのとき（アカウントが存在しないとき）
                        store.setMessage('存在しないユーザーです', false)
                        const message = store.getMessage();
                        if(message.msg !== ''){
                            controller.emit_message(message)  
                        }                        
                        this.IsExist=false
                    }else{
                        console.log('アカウント存在します')
                        console.log('this.IsExist：'+this.IsExist)
                        if(this.IsExist){
                            const word_id = this.getId()
                            controller.saveUserAccount_ajax(word_id, this.screen_name, 0)//引数(キーワードID, スクリーンネーム　, キーワードタイプ（0:ターゲットアカウント 1:フォロー済アカウント　2:アンフォローアカウント）)
                            controller.$once('AJAX_COMPLETE_SAVETARGETACCOUNT', ($event) => {
                
                                if($event.response.res === 'OK'){
                                    console.log('リクエストに成功しました. AJAX_COMPLETE_SAVETARGETACCOUNT')
                                    console.dir($event.response.rst)                   
                                    
                                    //Listに追加する
                                    this.datas.push({id: word_id, text:this.screen_name}) 
                
                
                                    //メッセージ表示
                                    store.setMessage($event.response.msg, true)
                                    const message = store.getMessage();
                                    if(message.msg !== ''){
                                        controller.emit_message(message)  
                                    }
                
                                }else {
                
                                    //メッセージ表示
                                    store.setMessage($event.response.msg, false)
                                    const message = store.getMessage();
                                    if(message.msg !== ''){
                                        controller.emit_message(message)  
                                    }
                                }
                
                                
                            })      
                        }
                    }
                    
                }else {
                    console.log('非公開のアカウントですよ')
                    this.IsExist=false
                    //メッセージ表示
                    store.setMessage($event.response.msg, false)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }
                }
                
            })  
        },
        updateDatas() {
            let that = this      
            controller.getUserAccount_ajax(0)//引数(キーワードタイプ（0:ターゲットアカウント 1:フォロー済アカウント 2:アンフォローアカウント）)
            controller.$once('AJAX_COMPLETE_GETTARGETACCOUNT', ($event) => {

                if($event.response.res === 'OK'){
                    console.log('リクエストに成功しました. AJAX_COMPLETE_GETTARGETACCOUNT')
                    console.dir($event.response.rst)
                    console.dir($event.response.rst.length)
                    const result = $event.response.rst
                    const length = $event.response.rst.length
                    that.datas = [];
                    if(result){
                        for(let i=0; i<length; i++){
                            //DBから取得したユーザーアカウントList情報をdatasに格納する
                            that.datas.push({id: result[i]['id'], text:result[i]['screen_name']})                          
                        }
                    }else {
                        //メッセージ表示
                        store.setMessage('リストの更新に失敗しました。時間をおいて再度お試しください', false)
                        const message = store.getMessage();
                        if(message.msg !== ''){
                            controller.emit_message(message)  
                        }
                    }

                }else {
                    this.loading = false
                    console.log('リクエストに失敗しました')

                    //メッセージ表示
                    store.setMessage($event.response.msg, false)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }

                }
                
            })
        },
        getId: function() {
            let strong = 1000;
            return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16);
        },
    }

}




</script>