<template>
<div>
    <li :class="classNameLi">
        <i v-if="listStyle ==='person'" :class="classNameIconPerson"></i>
        <i v-else :class="classNameIcon" v-on:click="toggleDone"></i>
        <span v-on:click="changeUser" class="p-sidebar__account">{{data.account}}</span>
        <i class="fa fa-trash c-garbage" v-on:click="$emit('delete-item', {item_id:data.id})" ></i>
    </li>
</div>
</template>

<script>
import Vue from 'vue'
import controller from './Controller.vue'
import store from './Store.vue'



export default {
    props: ['data', 'listStyle', 'active_user'],//propsで受け取ったデータは関数内でthis.dataで使える
    data: function(){
        return {
            classNameLi:{
                'c-listItem': true,
                'c-listItem--done': this.data.isDone
            },
            classNameIcon: {
                'far': true,
                'fa-calendar-check': !this.data.isDone,
                // 'fa-check-circle': this.data.isDone,
                // 'c-icon--checked': true
            },
            classNameIconPerson: {
                'fas': true,
                'fa-user': true,
                'p-user-selected':this.active_user === this.data.account
                // 'fa-check-circle': this.data.isDone,
                // 'c-icon--checked': true
            },
        }
    },
    mounted() {
        //アクティブユーザーを選択状態にする
        this.setActiveUser();
    },
    watch: {
        active_user: function() {
            this.$set(this.classNameIconPerson, 'p-user-selected', this.data.account === this.active_user)
        }
    },
    methods: {
        toggleDone(){
            console.log('clicked チェック')
            this.data.isDone = !this.data.isDone
            let status = this.data.isDone
            this.$set(this.classNameLi, 'c-listItem--done', status)
            this.$set(this.classNameIcon, 'fa-circle-thin', !status)
            this.$set(this.classNameIcon, 'fa-check-circle', status)
            // this.$emit('toggleDone', {item_id: data_.id})
        },
        //ユーザーのアカウント情報を取得してhome画面に返す
        changeUser() {
            let that = this //thisを退避
            console.log('changeUser clicked!')
            console.log('アカウント：'+that.data.account)

            controller.getUserInfo_ajax(this.data.account)            
            controller.$on('AJAX_COMPLETE_GETUSERINFO', ($event) => {

                if($event.response.res === 'OK'){
                    console.log('getuserinfoが帰ってきたよ')
                    console.dir($event.response)
                    this.$set(this.classNameIconPerson, 'p-user-selected', that.data.account === $event.response.active_user)
                    // this.active_user = $event.response.active_user
                    console.log('アクティブユーザーはこれです：'+$event.response.active_user)
                    //親コンポーネントにアクティブユーザーを渡す
                    this.$emit('change-active-user', {active_user:$event.response.active_user})
                    //メッセージを表示する
                    //リロードの場合(引数false)は切り替え完了メッセージを表示しない                   
                    store.setMessage($event.response.msg, true)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }
                    
                }else {
                    this.loading = false
                    console.log('リクエストに失敗しました')
                    // {'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'}

                    store.setMessage('サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。', false)

                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }

                }
                
            })

        },
        setActiveUser(){
            controller.getActiveUser_ajax(this.data.account)            
            controller.$on('AJAX_COMPLETE_GETACTIVEUSER', ($event) => {

                if($event.response.res === 'OK'){
                    console.log('getactiveuserが帰ってきたよ')
                    console.dir($event.response)
                    this.$set(this.classNameIconPerson, 'p-user-selected', this.data.account === $event.response.active_user)
                    // this.active_user = $event.response.active_user
                    console.log('アクティブユーザーはこれです：'+$event.response.active_user)                    
                    //親コンポーネントにアクティブユーザーを渡す
                    this.$emit('change-active-user', {active_user:$event.response.active_user})
                }else {
                    console.log('リクエストに失敗しました')
                    // {'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'}

                    store.setMessage('サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。', false)

                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }

                }
                
            })
        }
        
    }

}
</script>

