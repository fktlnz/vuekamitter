<template>
<div>

    <KeywordComponent v-for="listItem in listItems" v-bind:key="listItem.id" v-bind:data="listItem" v-on:delete-item="deleteItem($event)" :type="type"></KeywordComponent>
    
</div>
</template>

<script>
import keyworditem from './KeywordItem.vue'
import _ from 'lodash';

export default {
    props: ['listItems', 'type'],
    components: {
        KeywordComponent: keyworditem
    },
    data: function(){
        return {
        }
    },   
    methods: {        
        deleteItem(id) {
            this.$emit('delete-item', {listId:id.item_id})
            this.datas = _.reject(this.datas, { 'id': id.item_id });        
        }
    }

}




</script>