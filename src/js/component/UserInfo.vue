<template>
    <div class="p-userInfo u-mb30">
        <img v-if=" img_url === '' " class="p-userInfo__img" src="src/img/noaccount.jpg" alt="">
        <img v-else class="p-userInfo__img" :src="img_url" alt="">

        <p v-if=" account_name === '' " class="p-userInfo__name">??????</p>
        <p v-else class="p-userInfo__name">{{account_name}}</p>
        
        <div class="p-userInfo__profile u-mb10">
            <p v-if=" description === '' ">まずはアカウント認証<i class="fas fa-key p-userInfo__key"></i>から始めよう！</p>
            <p v-else>{{description}}</p>
        </div>
        <div v-if=" account_name !== '' " class="p-userInfo__head">
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
    </div>
</template>


<script>
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
    }

}
</script>