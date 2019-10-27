<template>
    <div class="p-userInfo mb30">
        <img class="p-userInfo__img" :src="img_url" alt="">
        <p class="p-userInfo__name">{{account_name}}</p>
        
        <div class="p-userInfo__profile mb10">
            <p>{{description}}</p>
        </div>
        <div class="p-userInfo__head">
            <ul>                
                <li class="p-userInfo__listitem-wrap">
                    <ul class="p-userInfo__list">
                        <li class="p-userInfo__listitem">{{friends}}</li>
                        <li class="p-userInfo__listitem">フォロー中</li>
                    </ul>
                </li>
                <li class="p-userInfo__listitem-wrap">
                    <ul class="p-userInfo__list">
                        <li class="p-userInfo__listitem">{{follower}}</li>
                        <li class="p-userInfo__listitem">フォロワー</li>
                    </ul>
                </li>
            </ul>
        </div>
        <span class="p-userInfo__logout" v-on:click="logout"><i class="fas fa-sign-out-alt"></i></span>
    </div>
</template>


<script>
// import Vue from 'vue'
import axios from 'axios'
import inputform from './InputForm.vue'
import controller from './Controller.vue'
import store from './Store.vue'

export default {
    props:['follower', 'friends', 'account_name', 'description', 'img_url'],
    components: {
        InputForm: inputform
    },
    data: function(){
        return {            
        }
    },    
    methods: {
        logout(){
            controller.logout_ajax()
            controller.$once('AJAX_FINISH_LOGOUT_RESULT', ($event) => {
                if($event.response.res === true){
                     //メッセージ表示
                    store.setMessage('ログアウトしました', true)
                    this.$router.push('/')
                }else{
                    //メッセージ表示
                    store.setMessage('ログアウトに失敗しました', false)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }
                }                
            })

        }
        
    }

}
</script>