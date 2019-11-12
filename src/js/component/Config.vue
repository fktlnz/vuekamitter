<template>
    <div class="l-subPage p-config-wrap">
        <div class="l-subPage__in">
            <Message></Message>
            <div class="c-form-wrap">
                <div class="u-txt_center"><button v-on:click="moveTop" class="c-btn c-moveTop"><i class="fas fa-home c-icon-home u-no_mgn"></i><span class="u-tb_pc">HOME</span></button><p class="c-heading p-heading__title u-txt_center">フォロー解除設定</p></div>
                
                <!-- エラー表示 -->
                <div class="p-error-area">
                    <ul>
                        <transition-group name="p-flip">
                            <template v-for="error in errors.error" >
                                <li v-bind:key="error">・{{ error }}</li>
                            </template>
                        </transition-group>
                    </ul>                       
                </div>               
                
                <InputForm v-on:onChange="onChange($event)" type="text" label="動作開始フォロー数　※このフォロー数に達したときに動作を開始します※" name="condition_friends" :value="data.friends"></InputForm>
                <InputForm v-on:onChange="onChange($event)" type="text" label="非アクティブ日数　※この日数ツイートしていないユーザーをフォロー解除します※" name="condition_nonactiveday" :value="data.nonactiveday"></InputForm>
                <InputForm v-on:onChange="onChange($event)" type="text" label="フォロー経過日数　※フォローしてからこの日数経過したユーザーをフォロー解除の対象とします※" name="condition_dayafterfollow" :value="data.dayafterfollow"></InputForm>
            </div>
            <div class="u-txt_center">
                <button class="c-btn" v-on:click="changePassword">変更する</button>        
            </div>
        </div>    
    </div>
</template>


<script>
import path from 'path';
// import Vue from 'vue'
import inputform from './InputForm.vue'
import controller from './Controller.vue'
import store from './Store.vue'
import message from './message.vue'


export default {
    components: {
        InputForm: inputform,
        Message: message,
    },
    data: function(){
        return {
            errors: '',
            data:{
                friends: '',
                nonactiveday: '',
                dayafterfollow: ''
            }
        }

        
    },
    mounted() {
        controller.getAccountUnfollowConfig_ajax()
        controller.$on('AJAX_FINISH_GETCONFIG_UNFOLLOW', ($event) => {
            console.log('フォロー解除設定値：')
            console.dir($event.response)                

            if($event.response.res === 'OK'){
                this.data.friends = $event.response.rst.friends_unfollow
                this.data.nonactiveday = $event.response.rst.nonactiveday_unfollow
                this.data.dayafterfollow = $event.response.rst.dayafterfollow_unfollow
                
            }else{
                store.setMessage($event.response.msg, true)                    
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                } 
            }

        })
    },
    methods: {
        moveTop() {
            this.$router.push('/home')
        },
        onChange($event){
            let name = $event.input.name;
            if(name==="condition_friends"){
                this.data.friends=$event.input.value
            }else if(name==="condition_nonactiveday"){
                this.data.nonactiveday=$event.input.value
            }else if(name==="condition_dayafterfollow"){
                this.data.dayafterfollow=$event.input.value
            }
        },
        changePassword(){

            controller.changeAccountUnfollowConfig_ajax(this.data)
            controller.$on('AJAX_FINISH_CHANGECONFIG_UNFOLLOW', ($event) => {
            // console.log('処理がフロントに帰ってきました')
            //     console.dir($event.response)                

                if($event.response.res === 'OK'){
                    this.errors = ''
                    store.setMessage($event.response.msg, true)                    
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    } 
                }else{
                    this.errors = $event.response;
                }

            })
        },
        
    }

}
</script>
