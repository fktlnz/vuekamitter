<template>
    <div class="l-subPage">
    <div class="c-form-wrap">
        <p class="c-heading p-heading__title txt_center">ユーザー登録</p>
        <div class="p-error-area">
            <ul>
                <transition-group name="flip">
                    <template v-for="error in errors.error" >
                        <li v-bind:key="error">・{{ error }}</li>
                    </template>
                </transition-group>
            </ul>            
        </div>
        <InputForm v-on:onChange="onChange($event)" type="text" label="ユーザー名*" name="username" placeholder="example"></InputForm>
        <InputForm v-on:onChange="onChange($event)" type="text" label="Email*" name="email" placeholder="example@gmail.com"></InputForm>
        <InputForm v-on:onChange="onChange($event)" type="password" label="パスワード*" name="password" placeholder=""></InputForm>
        <InputForm v-on:onChange="onChange($event)" type="password" label="パスワード再入力*" name="re_pass" placeholder=""></InputForm>        
    </div>
    <div class="txt_center">
        <button class="c-btn" v-on:click="signUp">登録</button>        
    </div>
    <div class="c-form-wrap">
        <router-link class="c-link" to="/signin">ログイン画面へ</router-link>
        <p>パスワードを忘れた方は<router-link class="c-link" to="/remindsend">こちら</router-link></p>
    </div>

    </div>
</template>


<script>
import path from 'path';
import Vue from 'vue'
import inputform from './InputForm.vue'
import controller from './Controller.vue'


export default {
    components: {
        InputForm: inputform
    },
    data: function(){
        return {
            errors: '',
            data:{
                username: '',
                email: '',
                password: '',
                re_pass: '',
            }
        }

        
    },
    methods: {
        onChange($event){
            let name = $event.input.name;
            if(name==="username"){
                this.data.username=$event.input.value
            }else if(name==="email"){
                this.data.email=$event.input.value
            }else if(name==="password"){
                this.data.password=$event.input.value
            }else if(name==="re_pass"){
                this.data.re_pass=$event.input.value
            }
        },
        signUp(){          
            controller.signUp_ajax(this.data)
            controller.$on('AJAX_COMPLETE_SIGNUP', ($event) => {
            // console.log('処理がフロントに帰ってきました')
            //     console.dir($event.response)
                if($event.response.res === 'OK'){
                    this.$router.push('/home')
                }
                this.errors = $event.response;
            })
        },
        
    }

}
</script>
