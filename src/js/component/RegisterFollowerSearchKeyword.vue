<template>    
    <div v-if=" show===true " class="l-subPage l-searchKeyPage">
        <Message></Message>
        <div class="txt_center"><button v-on:click="moveTop" class="c-btn c-moveTop"><i class="fas fa-home c-icon-home"></i>HOME</button><span class="c-title p-heading__follow">フォロワーサーチキーワード登録</span></div>        
        <div>            
            <select v-on:change="onChangeOption($event)" class="select-init c-logicOption">
                <option selected>AND</option>
                <option>OR</option>
                <option>NOT</option>
            </select>
            <InputForm v-on:onChange="onChange($event)" type="text" label="" name="text" placeholder="フォロワーサーチキーワード"></InputForm>
        </div>
        <div class="txt_right">
            <button v-on:click="addItem"  class="c-btn">追加</button>
        </div>
        <KeywordListComponent v-bind:listItems="datas" v-on:delete-item="deleteItem($event)" type="followersearch"></KeywordListComponent>
        
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
            datas: [],
            searchText: '',
            option_num: '0',
            option_text: 'AND',
            show:false
        }
    },
    created() {
        //ログインチェック結果
        controller.checkLogin_ajax()
        controller.$once('AJAX_COMPLETE_CHECKLOGIN', ($event) => {
            console.log('DEBUG -- Home.vue --> ログインチェックが完了しました')
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
    mounted() {
        this.updateDatas()
    },
    methods: {
        moveTop() {
            this.$router.push('/home')
        },
        onChangeOption(event) {               
            this.option_num = event.target.selectedIndex  
            this.option_text = event.target.value 
        },
        onChange(event) {                      
            this.searchText = event.input.value
        },
        addItem(event) {
            //キーワード未入力の場合
            if(this.searchText === ''){
                //メッセージ表示
                store.setMessage('キーワードを入力してください', false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
                return
            }

            const word_id = this.getId()
            controller.saveKeyword_ajax(word_id, this.searchText, this.option_num, 0)//引数(キーワードID, キーワード, AND/OR/NOT, キーワードタイプ（0:フォロワーサーチ 1:いいねキーワード）)
            controller.$once('AJAX_COMPLETE_SAVEFOLLOWERSEARCHWORD', ($event) => {

                if($event.response.res === 'OK'){              
                    
                    //Listに追加する
                    this.datas.push({id: word_id, text:`[${this.option_text}]  `+this.searchText, option:this.option_num}) 

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
        },
        updateDatas() {
            let that = this      
            controller.getKeyword_ajax(0)//引数(キーワードタイプ（0:フォロワーサーチ 1:いいねキーワード）)
            controller.$once('AJAX_COMPLETE_GETFOLLOWERSEARCHWORD', ($event) => {

                if($event.response.res === 'OK'){
                    const result = $event.response.rst
                    const length = $event.response.rst.length
                    that.datas = [];
                    let optionText = ''
                    for(let i=0; i<length; i++){
                        //DBから取得したList情報をdatasに格納する                        
                        if(result[i]['logic'] ==='0'){
                            optionText = 'AND'
                        }else if(result[i]['logic'] ==='1'){
                            optionText = 'OR'
                        }else if(result[i]['logic'] ==='2'){
                            optionText = 'NOT'
                        }
                         
                        that.datas.push({id: result[i]['id'], text:`[${optionText}]  `+result[i]['word']})                          
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
        deleteItem(id) {
            controller.deleteKeyword_ajax(id.listId, 0)//引数(キーワードID, キーワードタイプ（0:フォロワーサーチ 1:いいねキーワード）)
            controller.$once('AJAX_COMPLETE_DELETEFOLLOWERSEARCHWORD', ($event) => {

                if($event.response.res === 'OK'){
                    // console.log('リクエストに成功しました. AJAX_COMPLETE_DELETEFOLLOWERSEARCHWORD') 
                     //メッセージ表示
                    store.setMessage($event.response.msg, true)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }

                    this.datas = _.reject(this.datas, { 'id': id.listId });

                }else {
                    this.loading = false
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
        }
    }

}




</script>