<template>
    <div class="l-subPage">
    <Message></Message>
    <div class="c-form-wrap">
        <div class="u-txt_center"><button v-on:click="moveTop" class="c-btn c-moveTop"><i class="fas fa-home c-icon-home"></i>HOME</button><p class="c-heading p-heading__title u-txt_center">ユーザー情報</p></div>        
        
        <div class="p-error-area">
            <ul>
                <transition-group name="p-flip">
                    <template v-for="error in errors.error" >
                        <li v-bind:key="error">・{{ error }}</li>
                    </template>
                </transition-group>
            </ul>            
        </div>
        <p class="c-input__label">ユーザー名</p>
        <p class="u-mb20">{{data.username}}</p>
        <!-- <InputForm v-on:onChange="onChange($event)" type="text" label="ユーザー名" name="username" :value="data.username"></InputForm> -->
        <InputForm v-on:onChange="onChange($event)" type="text" label="Email" name="email" :value="data.email"></InputForm>
    </div>
    <div class="u-txt_center">
        <button class="c-btn" v-on:click="changeUserInfo">変更する</button>        
    </div>
    <div class="c-form-wrap">
        <p>パスワードの変更は<router-link class="c-link" to="/changepass">こちら</router-link></p>
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
                email: '',
            }
        }

        
    },
    mounted() {
        controller.getLoginUserInfo_ajax()
        controller.$once('AJAX_COMPLETE_GETLOGINUSERINFO', ($event) => {
            if($event.response.res === 'OK'){  
                console.log($event.response.rst.username )                     
                this.data.username = $event.response.rst.username
                this.data.email = $event.response.rst.email
            }else{
                store.setMessage($event.response.msg, false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
            }
        })

        const message = store.getMessage();
        if(message.msg !== ''){
            controller.emit_message(message)  
        }

    },
    methods: {
        moveTop() {
            this.$router.push('/home')
        },
        onChange($event){
            let name = $event.input.name;
            if(name==="email"){
                this.data.email=$event.input.value
            }
        },
        changeUserInfo(){          
            controller.changeLoginUserInfo_ajax(this.data)
            controller.$on('AJAX_COMPLETE_CHANGELOGINUSERINFO', ($event) => {
            // console.log('処理がフロントに帰ってきました')
            //     console.dir($event.response)
                if($event.response.res === 'OK'){
                    store.setMessage($event.response.msg, true)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }
                }

                this.errors = $event.response;

                // if($event.response.res === 'OK'){
                    
                // }else{

                // }
                
            })
        },
        
    }

}
</script>
