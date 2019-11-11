<template>
    <div class="l-topPage">
        <div class="l-topPage__in">
            <h1 class="u-mb30">『神ったー』へようこそ！</h1>
            <h3>『神ったー』とは...</h3>
            <p class="u-mb30">Twitterの自動集客システムです。</p>
            <p class="u-mb30">
                <span>このシステムができること</span>
                <br>
                ・あなたがフォローしたい相手を自動でフォローします
                <br>
                ・あなたがイイネしたいツイートを自動でいいねします
                <br>
                ・フォローしてほしい人からフォローしてもらえます
                
                
            </p>
            <button class="c-btn" @click="moveRegister">さっそく使ってみる</button>
        </div>
        
        


    </div>
</template>


<script>
import inputform from './InputForm.vue'
import controller from './Controller.vue'
import store from './Store.vue'

export default {
    components: {
        InputForm: inputform
    },
    data: function(){
        return {            
        }
    },    
    methods: {
        moveRegister() {
            this.$router.push('/signup')
        }
    }

}
</script>