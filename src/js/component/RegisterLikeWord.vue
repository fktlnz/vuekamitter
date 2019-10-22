<template>    
    <div class="l-subPage l-likePage">
        <Message></Message>
        <div class="txt_center"><button v-on:click="moveTop" class="c-btn c-moveTop"><i class="fas fa-home c-icon-home"></i>HOME</button><span class="c-title p-heading__like">自動いいねキーワード登録</span></div>
        
        <div>
            <select v-on:change="onChangeOption($event)" class="select-init c-logicOption">
                <option selected>AND</option>
                <option>OR</option>
                <option>NOT</option>
            </select>
            <InputForm v-on:onChange="onChange($event)" type="text" label="" name="text" placeholder="いいねキーワード"></InputForm>
        </div>
        <div class="txt_right">
            <button v-on:click="addItem"  class="c-btn">追加</button>
        </div> 
        <KeywordListComponent v-bind:listItems="datas" v-on:delete-item="deleteItem($event)" type="like"></KeywordListComponent>
        

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
        InputForm: inputform,
        KeywordListComponent: keywordlist,
        // SearchComponent: search,
        Message: message,
    },
    data: function(){
        return {
            datas: [],
            likeWord: '',
            option_num: '0',
            option_text: 'AND'
        }
    }, 
    mounted() {
        this.updateDatas()
    },
    methods: {
        moveTop() {
            this.$router.push('/home')
        },
        onChangeOption(event) {     
            console.log(event.target.value+':'+event.target.selectedIndex);            
            this.option_num = event.target.selectedIndex  
            this.option_text = event.target.value 
        },
        onChange(event) {            
            console.log(event.input.value);            
            this.likeWord = event.input.value
        },
        addItem() {
            //キーワード未入力の場合
            if(this.likeWord === ''){
                //メッセージ表示
                store.setMessage('キーワードを入力してください', false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
                return
            }

            const word_id = this.getId()
            controller.saveKeyword_ajax(word_id, this.likeWord, this.option_num, 1)//引数(キーワードID, キーワード, AND/OR/NOT, キーワードタイプ（0:フォロワーサーチ 1:いいねキーワード）)
            controller.$once('AJAX_COMPLETE_SAVELIKEWORD', ($event) => {

                if($event.response.res === 'OK'){
                    console.log('リクエストに成功しました. AJAX_COMPLETE_SAVELIKEWORD')
                    console.dir($event.response.rst)                   
                    
                    //Listに追加する
                    this.datas.push({id: word_id, text:`[${this.option_text}]  `+this.likeWord, option:this.option_num}) 


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

            //入力欄初期化


        },
        updateDatas() {
            let that = this      
            controller.getKeyword_ajax(1)//引数(キーワードタイプ（0:フォロワーサーチ 1:いいねキーワード）)
            controller.$once('AJAX_COMPLETE_GETLIKEWORD', ($event) => {

                if($event.response.res === 'OK'){
                    console.log('リクエストに成功しました. AJAX_COMPLETE_GETLIKEWORD')
                    console.dir($event.response.rst)
                    console.dir($event.response.rst.length)
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

                    console.log('that.data push後')
                    console.log(that.datas)
                    

                    

                    //this.datas.push({id: this.getId(), date:this.yourValue, text:this.text, isDone:false})                 

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
            console.log('delete-btn clicked!!'+id.listId)

            controller.deleteKeyword_ajax(id.listId, 1)//引数(キーワードID, キーワードタイプ（0:フォロワーサーチ 1:いいねキーワード）)
            controller.$once('AJAX_COMPLETE_DELETELIKEWORD', ($event) => {

                if($event.response.res === 'OK'){
                    console.log('リクエストに成功しました. AJAX_COMPLETE_DELETELIKEWORD') 
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
        getId: function() {
            let strong = 1000;
            return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16);
        }
    }

}




</script>