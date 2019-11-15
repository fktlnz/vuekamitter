<template>
    <div class="l-topPage">
        <div class="l-topPage__in">
            <h1 class="u-mb30">『神ったー』へようこそ！</h1>
            <h3 class="u-mb50">『神ったー』とは... 
                <br>
                Twitterの自動集客システムです。
                <br>
                繋がりたい人にすばやくリーチして世界を広げてみよう！
            </h3>
            <div class="p-topPage-descarea u-mb50">
                <div class="p-topPage-descItem">
                    <img class="p-topPage-descItem__img u-mb15" src="dist/img/follow.png" alt="握手">
                    <h5 class="p-topPage-descItem__heading u-mb15">自動フォロー機能</h5>
                    <p class="p-topPage-descItem__txt">あなたがフォローしたいユーザーを探して自動でフォローします。フォローすることで相手からのフォローバックが期待できます</p>
                </div>
                <div class="p-topPage-descItem">
                    <img class="p-topPage-descItem__img u-mb15" src="dist/img/like.png" alt="いいね！">
                    <h5 class="p-topPage-descItem__heading u-mb15">自動いいね機能</h5>
                    <p class="p-topPage-descItem__txt">あなたがいいねしたいツイートに対して自動でいいねをします。</p>
                </div>
                <div class="p-topPage-descItem">
                    <img class="p-topPage-descItem__img u-mb25" src="dist/img/tweet.png" alt="ツイート">
                    <h5 class="p-topPage-descItem__heading u-mb15">自動ツイート機能</h5>
                    <p class="p-topPage-descItem__txt">好きな日時に好きな内容を投稿することができます。</p>
                </div>
            </div>
            <button class="c-btn c-shiny-btn1" @click="moveRegister">さっそく使ってみる</button>
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