<template>
    <div class="p-list">
        <span v-on:click="onMoveTwitter" class="p-list__account">{{data.name}}</span>
        <span class="p-list__date">{{data.created_at}}</span>
        <p class="p-list__content">{{data.text}}</p>
    </div>

</template>

<script>
import Vue from 'vue'
// import inputform from './InputForm.vue'

export default {
    props: [
        'data',
        'heading'
    ],
    data: function(){
        return {            
        }
    },
    methods: {
        onMoveTwitter () {
            if(this.heading==='follow'){
                //ユーザーのページを表示
                window.open("https://twitter.com/" + this.data.name, '_blank'); // 新しいタブを開き、ページを表示
            }else{
                //ツイートを表示
                window.open("https://twitter.com/" + this.data.name + "/status/" + this.data.id, '_blank'); // 新しいタブを開き、ページを表示
            }
        }
        
    }

}
</script>