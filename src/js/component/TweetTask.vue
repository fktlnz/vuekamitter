<template>
<div class="p-list-autotwt">
    <li :class="classNameLi">
        <i :class="classNameIcon"></i>
        <ul class="p-list-autotwt__wrap">
            <li>
                <ul>
                    <li class="p-list-autotwt__date-ttl">日付：</li>
                    <li class="p-list-autotwt__date-val">{{data.date}}</li>                    
                </ul>
            </li>
            <li>
                <ul>
                    <li class="p-list-autotwt__content-ttl">内容：</li>
                    <li class="p-list-autotwt__content-val">{{data.text}}</li>
                </ul>
            </li>
        </ul>
        <i v-if="data.isDone === '1'" class="fa fa-trash c-garbage" v-on:click="$emit('delete-item', {item_id:data.id})" ></i>
    </li>
</div>
</template>

<script>
import Vue from 'vue'



export default {
    props: ['data'],//propsで受け取ったデータは関数内でthis.dataで使える
    data: function(){
        return {
            classNameLi:{
                'c-listItem': true,
                'c-listItem--done': this.data.isDone === '1' ? true : false  
            },
            classNameIcon: {
                'fa': true,
                'fa-calendar-check': this.data.isDone === '1' ? false : true ,
                'fa-check-circle': this.data.isDone === '1' ? true : false ,
            }
        }
    },
    updated() {
        this.$set(this.classNameLi, 'c-listItem--done', this.data.isDone === '1' ? true : false)
        this.$set(this.classNameIcon, 'fa-calendar-check', this.data.isDone === '1' ? false : true)
        this.$set(this.classNameIcon, 'fa-check-circle', this.data.isDone === '1' ? true : false)
    }
    ,
    methods: {       
        
    }

}
</script>

