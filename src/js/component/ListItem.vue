<template>
    <div class="p-list-area">

        <div class="p-heading-area" :class="classname">
            <p class="c-heading">{{heading_jp}}</p>
            <ul v-if=" heading === 'follow' ">
                <li>
                    <ul class="p-list__row">
                        <li class="p-list__row-item">ターゲットにするアカウントを登録しよう！</li>
                        <li class="p-list__row-item p-list__btn--follow c-hover" @click="onClick">登録</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li class="p-list__row-item">キーワードを登録しよう！</li>
                        <li class="p-list__row-item p-list__btn--follow c-hover" v-on:click="onClickKeyword">登録</li>
                    </ul>
                </li>
            </ul>
            <ul v-if=" heading === 'like' ">
                <li>
                    <ul class="p-list__row">
                        <li class="p-list__row-item">いいね対象のキーワードを登録しよう！</li>
                        <li class="p-list__row-item p-list__btn--like c-hover" @click="onClick">登録</li>
                    </ul>
                </li>                
            </ul>
            <ul v-if=" heading === 'unFollow' ">
                <li class="p-list__row-item">稼働していないアカウントを自動でフォロー解除します！</li>                
            </ul>
            <ul v-if=" heading === 'tweetschedule' ">
                <li>
                    <ul class="p-list__row">
                        <li class="p-list__row-item">予約投稿を登録しよう！</li>
                        <li class="p-list__row-item p-list__btn--twtschedule c-hover" @click="onClick">登録</li>
                    </ul>
                </li>                
            </ul>
        </div>

        <div class="p-list-wrap">
            <Record v-for="listItem in listItems" v-bind:key="listItem.id" v-bind:data="listItem" :heading='heading'></Record>
        </div>

    </div>

</template>

<script>
// import Vue from 'vue'
import listrecord from './ListRecord.vue'

export default {
    props: [
        'listItems',
        'heading',
        'classname'
    ],
    data : {
        class: '',
        heading_jp: '',
    },
    components: {
        Record: listrecord
    },
    data: function(){
        return {            
        }
    },
    created() {
        if(this.heading === 'follow'){
            this.heading_jp = '自動フォロー'
        }else if(this.heading === 'like'){
            this.heading_jp = '自動いいね'
        }else if(this.heading === 'unFollow'){
            this.heading_jp = '自動フォロー解除'
        }else if(this.heading === 'tweetschedule'){
            this.heading_jp = 'ツイート投稿'
        }
    },
    methods: {
        onChangeTxt($event){
           
        },
        onClick(){
            let route = this.heading
            if(route==='follow') route='target'
            this.$router.push('/'+route)
        },
        onClickKeyword() {
            this.$router.push('/keywords')
        }
        
    }

}



</script>