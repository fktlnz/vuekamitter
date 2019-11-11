<template>
    <div class="l-subPage">
    <Message></Message>
    <div class="c-form-wrap">
        <div class="u-txt_center"><button v-on:click="moveTop" class="c-btn c-moveTop"><i class="fas fa-home c-icon-home"></i>HOME</button><p class="c-heading p-heading__title u-txt_center">パスワードの変更</p></div>        
        
        <div class="p-error-area">
            <ul>
                <transition-group name="p-flip">
                    <template v-for="error in errors.error" >
                        <li v-bind:key="error">・{{ error }}</li>
                    </template>
                </transition-group>
            </ul>            
        </div>
        <InputForm v-on:onChange="onChange($event)" type="text" label="現在のパスワード" name="password_old"></InputForm>
        <InputForm v-on:onChange="onChange($event)" type="text" label="新しいパスワード" name="password_new"></InputForm>
        <InputForm v-on:onChange="onChange($event)" type="text" label="新しいパスワード（確認）" name="re_password_new"></InputForm>
    </div>
    <div class="u-txt_center">
        <button class="c-btn" v-on:click="changePassword">変更する</button>        
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
            errors: '',
            data:{
                password_old: '',
                password_new: '',
                re_password_new: '',
            }
        }

        
    },
    methods: {
        moveTop() {
            this.$router.push('/home')
        },
        onChange($event){
            let name = $event.input.name;
            if(name==="password_old"){
                this.data.password_old=$event.input.value
            }else if(name==="password_new"){
                this.data.password_new=$event.input.value
            }else if(name==="re_password_new"){
                this.data.re_password_new=$event.input.value
            }
        },
        changePassword(){
            //新パスワード-新パスワード（確認）が一致しているか
            // if(this.data.password_new !== this.data.re_password_new){
            //     store.setMessage('パスワードとパスワード（確認）が一致していません', false)
            //     const message = store.getMessage();
            //     if(message.msg !== ''){
            //         controller.emit_message(message)  
            //     }
            //     return
            // }
            controller.changePassword_ajax(this.data)
            controller.$on('AJAX_COMPLETE_CHANGEPASSWORD', ($event) => {
            // console.log('処理がフロントに帰ってきました')
            //     console.dir($event.response)                

                if($event.response.res === 'OK'){
                    this.errors = ''
                    store.setMessage($event.response.msg, true)                    
                    this.$router.push('/edituser')
                }else{
                    this.errors = $event.response;
                }

            })
        },
        
    }

}
</script>
