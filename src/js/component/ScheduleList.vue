<template>    
    <div>

        <div>
            <TweetItemsComponent v-for="listItem in listItems" v-bind:key="listItem.id" v-bind:data="listItem" v-on:delete-item="deleteItem($event)"></TweetItemsComponent>
        </div>
 
    </div>
</template>

<script>
import tweettask from './TweetTask.vue'
import _ from 'lodash';

export default {
    props: ['listItems'],
    components: {
        TweetItemsComponent: tweettask
    },
    data: function(){
        return {
        }
    },   
    methods: {        
        deleteItem(id) {
            console.log('delete-btn clicked!!'+id.item_id)
            this.$emit('delete-item', {listId:id.item_id})
            this.datas = _.reject(this.datas, { 'id': id.item_id });        
        }
    }
}




</script>