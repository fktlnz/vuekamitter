<template>  
<div>
    <transition name="p-flip">
    <div v-if="visible===true" class="p-message-area">
        <ul>
            <li v-if="status===true" class="p-message-area__status">
                <i class="fas fa-info-circle c-color__info"></i>
            </li>
            <li v-if="status===false" class="p-message-area__status">
                <i class="fas fa-times-circle c-color__warning"></i>
            </li>
            <li class="p-message-area__msg">
                <p class="p-message-area_msg-val">{{msg}}</p>
            </li>
        </ul>

    </div>    
    </transition>
    
</div>  
</template>

<script>
import _ from 'lodash'
import $ from 'jquery'
import controller from './Controller.vue'


export default {
    components: {
    },
    data: function(){
        return {            
            status: true,
            msg: '',
            visible:false

        }
    },   
    mounted: function(){
        $('.p-massage-area').on('click', function () {
            if ($('.p-sidebar').hasClass('open')) {
            $('.p-sidebar').removeClass('open');
            // $('.p-sidebar').css('left','-300px');
            } else {
            $('.p-sidebar').addClass('open');
            // $('.p-sidebar').css('left','0');
            }
        })
    },
    created () {
        // view が作られた時にデータを取得し、
        // そのデータは既に監視されています
        this.fetchData()
    },
    updated () {
        setTimeout(
            this.setfalse
        , 3000)
        // this.visible=false
    },
    watch: {
        // ルートが変更されたらこのメソッドを再び呼び出します
        '$route': 'fetchData'
    },
    methods: {
        Onclick(){   
            
        },
        fetchData() {
            controller.$on('DISPLAY_MESSAGE', (event) => {
                // console.log('メッセージを表示します=>'+event.message.msg)
                this.status = event.message.status
                this.msg = event.message.msg
                this.visible=true
                
                
            })
        },
        setfalse() {
            this.visible=false
        }
    }

}



</script>
