<template>
    <div class="p-list-area">

        <div class="p-heading-area">
            <p class="c-heading" :class="classname" @click="onClick" >{{heading}}</p>
        </div>

        <div class="p-list-wrap">

            <div v-if=" heading==='follow' " class="txt_right"><span v-on:click="onClickKeyword" class="c-heading p-heading__follow p-list__keywordBtn">Keywords</span></div>
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
        class: ''
    },
    components: {
        Record: listrecord
    },
    data: function(){
        return {            
        }
    },
    methods: {
        onChangeTxt($event){
           
        },
        onClick(){
            let route = this.heading
            if(route==='unFollow') return
            if(route==='follow') route = 'target'
            console.log('route:'+route)
            this.$router.push('/'+route)
        },
        onClickKeyword() {
            this.$router.push('/keywords')
        }
        
    }

}



</script>