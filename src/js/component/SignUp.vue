<template>
    <div class="l-subPage">
    <div class="c-form-wrap">
        <p class="c-heading p-heading__title u-txt_center">ユーザー登録</p>
        <div class="p-error-area">
            <ul>
                <transition-group name="p-flip">
                    <template v-for="error in errors.error" >
                        <li v-bind:key="error">・{{ error }}</li>
                    </template>
                </transition-group>
            </ul>            
        </div>
        <InputForm v-on:onChange="onChange($event)" type="text" label="ユーザー名　(必須)" name="username" placeholder="example"></InputForm>
        <InputForm v-on:onChange="onChange($event)" type="text" label="Email　(必須)" name="email" placeholder="example@gmail.com"></InputForm>
        <InputForm v-on:onChange="onChange($event)" type="password" label="パスワード　(必須)" name="password" placeholder=""></InputForm>
        <InputForm v-on:onChange="onChange($event)" type="password" label="パスワード再入力　(必須)" name="re_pass" placeholder=""></InputForm>        
    </div>
    <div class="u-txt_center">
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
// import Vue from 'vue'
import inputform from './InputForm.vue'
import controller from './Controller.vue'
import store from './Store.vue'


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
                    controller.signIn_ajax(this.data)
                    controller.$once('AJAX_COMPLETE_SIGNIN', ($event) => {
                        // console.log('フロントに帰ってきたデータ↓')
                        // console.dir($event.response)
                        if($event.response.res === 'OK'){
                            store.setMessage('ユーザー登録完了！アカウント認証から始めよう！', true)
                            this.$router.push('/home')
                        }else {
                            this.errors = $event.response
                        }
                        
                    })
                }
                this.errors = $event.response;
            })
        },
        
    }

}
</script>
