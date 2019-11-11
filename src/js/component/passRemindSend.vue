<template>
    <div class="l-subPage">
    <Message></Message>   
    <div class="l-subPage__in">
        <div class="c-form-wrap">
            <p class="c-heading p-heading__title u-txt_center">認証コード生成</p>
            <InputForm v-on:onChange="onChange($event)" type="text" label="ユーザー名" name="username"></InputForm>             
            <InputForm v-on:onChange="onChange($event)" type="text" label="メールアドレス" name="email"></InputForm>
        </div>
        <div class="u-txt_center">
            <button class="c-btn" v-on:click="makeRePassword">生成する</button>
        </div>
        <div class="c-form-wrap">
            <router-link class="c-link" to="/signin">ログイン画面へ</router-link>
        </div>
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
            username:'',
            email: ''
        }

        
    },
    mounted: function(){
    },
    methods: {
        onChange($event){
            let name = $event.input.name;
            if(name==="username"){
                this.username=$event.input.value
            }else if(name==="email"){
                this.email=$event.input.value
            }
        },
        makeRePassword(){
            if(this.email === '' || this.username === ''){
                //メッセージ表示
                store.setMessage('未入力の項目があります', false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
                return
            } 

            const chkemail = this.validEmail()
            if(!chkemail){
                //emailの形式でなかった場合
                //メッセージ表示
                store.setMessage('Emailの形式で入力してください', false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
                return
            }

            //usernameの半角英数字チェック
            const chkname = this.validhalf()
             if(!chkname){
                //emailの形式でなかった場合
                //メッセージ表示
                store.setMessage('半角英数字で入力してください', false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
                return
            }

            controller.passRemindSend_ajax(this.username, this.email)
            controller.$once('AJAX_COMPLETE_PASSREMINDSEND', ($event) => {
                if($event.response.res === 'OK'){
                    //メッセージ表示
                    store.setMessage($event.response.msg, true)
                    this.$router.push('/remindrecieve')
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
        validEmail(){
            const regexp = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
            if(this.email.match(regexp)){
                return true
            }else {
                return false
            }
        },
        validhalf(){
            const regexp = new RegExp(/^[A-Za-z0-9]*$/);
            if(this.username.match(regexp)){
                return true
            }else {
                return false
            }
        }
        
    }

}
</script>