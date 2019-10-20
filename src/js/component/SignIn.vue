<template>
    <div class="l-subPage">
    <div class="txt_center">
    <span class="c-heading p-heading__title">ログイン</span>
    </div>
    <div class="c-form-wrap">
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
        <InputForm v-on:onChange="onChange($event)" type="password" label="パスワード*" name="password" placeholder=""></InputForm>
    </div>
    <div class="txt_center">
        <button class="c-btn" v-on:click="signIn">ログイン</button>
    </div>

    </div>
</template>


<script>
import path from 'path';
import Vue from 'vue'
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
                password: '',
            }
        }

        
    },
    methods: {
        onChange($event){
            console.log('event@SignUp')
            console.dir($event.input.value);
            console.dir($event.input);
            let name = $event.input.name;
            if(name==="username"){
                this.data.username=$event.input.value
            }else if(name==="password"){
                this.data.password=$event.input.value
            }
        },
        signIn(){          
            console.dir(this.data) 
            controller.signIn_ajax(this.data)
            controller.$once('AJAX_COMPLETE_SIGNIN', ($event) => {
                console.log('フロントに帰ってきたデータ↓')
                console.dir($event.response)
                if($event.response.res === 'OK'){
                    store.setMessage('ログインに成功しました', true)
                    this.$router.push('/home')
                }else {
                    this.errors = $event.response
                    console.log(this.errors)
                }
                
            })
        },
        
    }

}
</script>