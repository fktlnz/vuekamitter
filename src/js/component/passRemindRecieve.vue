<template>
    <div class="l-subPage">
    <Message></Message>    
    <div class="c-form-wrap">   
        <p class="c-heading p-heading__title txt_center">パスワード再発行</p>     
        <InputForm v-on:onChange="onChange($event)" type="text" label="認証コード*" name="username"></InputForm>
    </div>
    <div class="txt_center">
        <button class="c-btn" v-on:click="makeRePassword">再発行する</button>
    </div>
    <div class="c-form-wrap">
        <router-link class="c-link" to="/signin">ログイン画面へ</router-link>
    </div>
    </div>
</template>


<script>
import path from 'path';
// import Vue from 'vue'
import inputform from './InputForm.vue'
import controller from './Controller.vue'
import store from './Store.vue'
import message from './message.vue'


export default {
    components: {
        InputForm: inputform,
        Message: message,
    },
    data: function(){
        return { 
            code: ''
        }

        
    },
    mounted: function(){
        //メッセージがセットされていれば表示する
        const message = store.getMessage();
        if(message.msg !== ''){
            controller.emit_message(message)  
        }  
    },
    methods: {
        onChange($event){
            // console.log('event@PassRemindSend')
            this.code=$event.input.value            
        },
        makeRePassword(){
            if(this.code === ''){
                //メッセージ表示
                store.setMessage('未入力です', false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
                return
            } 

            const chkcode = this.validhalf()
            if(!chkcode){
                //emailの形式でなかった場合
                //メッセージ表示
                store.setMessage('半角英数字を入力してください', false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
                return
            }
            controller.passRemindRecieve_ajax(this.code)
            controller.$once('AJAX_COMPLETE_PASSREMINDRECIEVE', ($event) => {
                // console.log('フロントに帰ってきたデータ↓')
                if($event.response.res === 'OK'){
                    //メッセージ表示
                    store.setMessage($event.response.msg, true)
                    this.$router.push('/')
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
        validhalf(){
            const regexp = new RegExp(/^[A-Za-z0-9]*$/);
            if(this.code.match(regexp)){
                return true
            }else {
                return false
            }
        }
        
    }

}
</script>