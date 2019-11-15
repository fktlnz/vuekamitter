<template>

    <div class="l-subPage">    
    <Message></Message>    
    <div class="c-form-wrap">
        <p class="c-heading p-heading__title u-txt_center">ログイン</p>
        <div class="p-error-area">
            <ul>
                <transition-group name="p-flip">
                    <template v-for="error in errors.error" >
                        <li v-bind:key="error">・{{ error }}</li>
                    </template>
                </transition-group>
            </ul>                       
        </div>
        <InputForm v-on:enter-key="signIn" v-on:onChange="onChange($event)" type="text" label="ユーザー名" name="username" placeholder="(例)kazukichi"></InputForm>        
        <InputForm v-on:enter-key="signIn" v-on:onChange="onChange($event)" type="password" label="パスワード" name="password" placeholder=""></InputForm>
    </div>
    <div class="u-txt_center">
        <button class="c-btn" v-on:click="signIn">ログイン</button>
    </div>
    <div class="c-form-wrap">
        <router-link class="c-link" :to="{name:'signup'}" ><span>ユーザー登録画面へ</span></router-link>
        <p>パスワードを忘れた方は<router-link class="c-link" :to="{name:'remindsend'}">こちら</router-link></p>
        <!-- <router-link class="c-link" to="/signup"><span>ユーザー登録画面へ</span></router-link>
        <p>パスワードを忘れた方は<router-link class="c-link" to="/remindsend">こちら</router-link></p> -->
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
                username: '',
                password: '',
            }
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
            let name = $event.input.name;
            if(name==="username"){
                this.data.username=$event.input.value
            }else if(name==="password"){
                this.data.password=$event.input.value
            }
        },
        signIn(){   
            controller.signIn_ajax(this.data)
            controller.$once('AJAX_COMPLETE_SIGNIN', ($event) => {
                // console.log('フロントに帰ってきたデータ↓')
                // console.dir($event.response)
                if($event.response.res === 'OK'){
                    store.setMessage('ログインに成功しました', true)
                    this.$router.push('/home')
                }else {
                    this.errors = $event.response
                }
                
            })
        },
        
    }

}
</script>