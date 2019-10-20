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
    </div>
</template>


<script>
import Vue from 'vue'
import axios from 'axios'
import inputform from './InputForm.vue'

const URL_BASE = 'http://localhost:8888/KamitterAPI/public/'

export default {
    props:['follower', 'friends', 'account_name', 'description', 'img_url'],
    components: {
        InputForm: inputform
    },
    data: function(){
        return {
            img_path: './src/img/morimoto.jpg'
        }
    },
    methods: {
        onChangeTxt($event){
            axios
                .get('http://localhost:8888/KamitterAPI/public/ip/ip?foo=test')
                .then(res => (console.log(res)))
        },
        
    }

}
</script>