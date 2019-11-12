<template>
    <div class="p-list-area">

        <div class="p-heading-area" :class="classname">
            <p :class="classColor">{{heading_jp}}</p>
            <p v-if=" heading === 'follow' " class="c-border-updown__desc--follow u-mb25 u-color__blue u-txt_left">
                ターゲットとして登録されたアカウントに類似したユーザーを自動フォローします。フォローしたいユーザーをキーワードで絞ろう！
                <br>
                フォローしたユーザーを下のリストで確認しみよう！
            </p>
            <p v-if=" heading === 'like' " class="c-border-updown__desc--like u-mb25 u-color__red u-txt_left">
                登録されたキーワードを持つツイートを自動でいいねします！
                <br>
                いいねしたツイートを下のリストで確認しみよう！
            </p>
            <p v-if=" heading === 'unFollow' " class="c-border-updown__desc--unfollow u-mb25 u-color__purple u-txt_left">
                稼働していないアカウントを自動でフォロー解除します。解除する条件は下記で設定できます。
                <br>
                フォロー解除したアカウントを下のリストで確認しみよう！
            </p>
            <p v-if=" heading === 'tweetschedule' " class="c-border-updown__desc--tweetschedule u-mb25 u-color__green u-txt_left">
                投稿を予約することができます。好きな時間と内容を登録してみよう！
                <br>
                登録内容は下のリストで確認しみよう！
            </p>
            <ul v-if=" heading === 'follow' ">
                <li>
                    <ul class="p-list__row">
                        <li class="p-list__row-item u-color__black">ターゲットにするアカウントを登録しよう！</li>
                        <li class="p-list__row-item p-list__btn c-hover" @click="onClick">登録</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li class="p-list__row-item u-color__black">キーワードを登録しよう！</li>
                        <li class="p-list__row-item p-list__btn c-hover" v-on:click="onClickKeyword">登録</li>
                    </ul>
                </li>
            </ul>
            <ul v-if=" heading === 'like' ">
                <li>
                    <ul class="p-list__row">
                        <li class="p-list__row-item u-color__black">いいね対象のキーワードを登録しよう！</li>
                        <li class="p-list__row-item p-list__btn c-hover" @click="onClick">登録</li>
                    </ul>
                </li>                
            </ul>
            <ul v-if=" heading === 'unFollow' ">
                <li>
                    <ul class="p-list__row">
                        <li class="p-list__row-item u-color__black">フォロー解除の設定はこちら</li>
                        <li class="p-list__row-item p-list__btn c-hover" @click="onClick">設定</li>
                    </ul>
                </li>              
            </ul>
            <ul v-if=" heading === 'tweetschedule' ">
                <li>
                    <ul class="p-list__row">
                        <li class="p-list__row-item u-color__black">予約投稿を登録しよう！</li>
                        <li class="p-list__row-item p-list__btn c-hover" @click="onClick">登録</li>
                    </ul>
                </li>                
            </ul>
        </div>

        <div :class="classListWrap">
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
    data : function() {
        return {
            class: '',
            heading_jp: '',
            classColor: {
                'c-heading': true,
                'u-mb20': true,
                'u-color__blue': this.heading === 'follow',
                'u-color__red': this.heading === 'like',
                'u-color__purple': this.heading === 'unFollow',
                'u-color__green': this.heading === 'tweetschedule',
            },
            classListWrap: {
                'p-list-wrap': true,
                'c-border-color__follow': this.heading === 'follow',
                'c-border-color__like': this.heading === 'like',
                'c-border-color__unfollow': this.heading === 'unFollow',
                'c-border-color__tweetschedule': this.heading === 'tweetschedule',
            }
        }
    },
    components: {
        Record: listrecord
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
            else if(route==='unFollow') route='config'
            this.$router.push('/'+route)
        },
        onClickKeyword() {
            this.$router.push('/keywords')
        }
        
    }

}



</script>