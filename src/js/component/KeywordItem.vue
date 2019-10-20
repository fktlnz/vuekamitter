<template>
<div>
    <li :class="classNameLi">        
        <i v-if=" type==='like' " :class="HeartIcon"></i>
        <i v-else-if=" type==='followersearch' " :class="SearchIcon"></i>
        <i v-else-if=" type==='target' " :class="TargetIcon"></i>
        <span v-if=" type==='target' " class="p-list__account" v-on:click="OnMoveTwitterPage">@{{data.text}}</span>
        <span v-else>{{data.text}}</span>
        <i class="fa fa-trash c-garbage" v-on:click="$emit('delete-item', {item_id:data.id})" ></i>
    </li>
</div>
</template>

<script>
import Vue from 'vue'
import controller from './Controller.vue'
import store from './Store.vue'



export default {
    props: ['data', 'type'],//propsで受け取ったデータは関数内でthis.dataで使える
    data: function(){
        return {
            classNameLi:{
                'c-listItem': true,
            },
            HeartIcon: {
                'fas': true,
                'fa-heart': true,
            },
            SearchIcon: {
                'fas': true,
                'fa-search': true,
            },
            TargetIcon: {
                'fas': true,
                'fa-bullseye': true,
            },
        }
    },
    mounted() {
    },
    watch: {
    },
    methods: {
        OnMoveTwitterPage() {
            window.open("https://twitter.com/" + this.data.text); // 新しいタブを開き、ページを表示
        }
    }

}
</script>

