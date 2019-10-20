<template>    
    <div>

        <div>
            <ItemsComponent v-for="listItem in listItems" v-bind:key="listItem.id" v-bind:data="listItem" v-on:delete-item="deleteItem($event)" listStyle="person" v-on:change-active-user="changeActiveUser($event)" :active_user="activeUser"></ItemsComponent>
        </div>
 
    </div>
</template>

<script>
import task from './Task.vue'
import _ from 'lodash';

export default {
    props: ['listItems'],
    components: {
        ItemsComponent: task
    },
    data: function(){
        return {
            activeUser: ''
        }
    },   
    methods: {
        toggleDone() {
            console.log('clicked')
            this.isDone = !this.isDone
            this.$set(this.classNameLi, 'list__item-done', this.isDone)
            this.$set(this.classNameIcon, 'fa-circle', !this.isDone)
            this.$set(this.classNameIcon, 'fa-check-circle', this.isDone)
        },
        deleteItem(id) {
            console.log('delete-btn clicked!!'+id.item_id)
            this.$emit('delete-item', {listId:id.item_id})
            this.datas = _.reject(this.datas, { 'id': id.item_id });        
        },
        changeActiveUser($event){
            console.log('changeactiveuser')
            console.log($event.active_user)
            this.activeUser = $event.active_user
            //親コンポーネントにアクティブユーザーを渡す
            this.$emit('change-active-user', {active_user:$event.active_user})
        }
    }

}




</script>