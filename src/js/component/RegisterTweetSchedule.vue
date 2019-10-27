<template>    

    <div v-if=" show===true " class="l-subPage p-autotwt-wrap">
        <Message></Message>
        <div class="txt_center"><button v-on:click="moveTop" class="c-btn c-moveTop"><i class="fas fa-home c-icon-home"></i>HOME</button><span class="c-title p-heading__twtschedule">自動ツイート設定</span></div>  
        <VueCtkDateTimePicker
         v-model="yourValue" 
         :minute-interval="1"
         :format="'YYYY-MM-DD HH:mm'"
         :overlay="true"
         :min-date="start"
         :max-date="end"
         />
        <InputForm v-on:onChange="onChange($event)" type="text" label="内容" name="text" placeholder="この内容をツイートします"></InputForm>   
        <div class="txt_right">
            <button v-on:click="addItem"  class="c-btn">追加</button>
        </div> 
        <ScheduleListComponent v-bind:listItems="datas" v-on:delete-item="deleteItem($event)"></ScheduleListComponent>
    </div>
</template>

<script>
import moment from 'moment'
import schedulelist from './ScheduleList.vue'
import inputform from './InputForm.vue'
import message from './message.vue'
import controller from './Controller.vue'
import store from './Store.vue'
import _ from 'lodash'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';

export default {
    components: {
        ScheduleListComponent: schedulelist,
        InputForm: inputform,
        VueCtkDateTimePicker, VueCtkDateTimePicker,
        Message: message,
    },
    data: function(){
        return {
            datas: [],
            date: '',
            text: '',
            yourValue: null,
            toggle: '1',
            registernum: 0,  
            show:false          
        }
    }, 
    created() {
        //ログインチェック結果
        controller.checkLogin_ajax()
        controller.$once('AJAX_COMPLETE_CHECKLOGIN', ($event) => {
            // console.log('DEBUG -- Home.vue --> ログインチェックが完了しました')
            // console.log($event.response.res)
            if($event.response.res === 'NOTLOGIN' ){
                //ログインユーザーでないためログイン画面に飛ばします。
                console.log('ログインユーザーでありません。')
                this.$router.push('/')
            }else{
                console.log('ログインユーザーです。')
                this.show = true
            }

        })
    },
    mounted() {        
        //Listの表示を更新
        this.updateDatas()

        

    },
    computed: {
        start() {
        // min-date に明日の9時を指定
        const start = moment().add(0, 'days').hour(1)
        return start.format('YYYY-MM-DDTHH:mm:ss')
        },
        end() {
        // max-date に min-date から3ヶ月後を指定
        const start = moment(this.start)
        const end = start.add(3, 'months').endOf('day')
        return end.format('YYYY-MM-DDTHH:mm:ss')
        }
    },
    methods: {
        moveTop() {
            this.$router.push('/home')
        },        
        onChange(event) {
            if(event.input.name ==='date'){
                this.date = event.input.value
            }else if(event.input.name ==='text') {
                this.text = event.input.value
            }

        },
        updateDatas() {
            let that = this      
            controller.getTweetSchedule_ajax()
            controller.$once('AJAX_COMPLETE_GETTWEETSCHEDULE', ($event) => {

                if($event.response.res === 'OK'){
                    // console.log('リクエストに成功しました. AJAX_COMPLETE_GETTWEETSCHEDULE')
                    // console.dir($event.response.rst)
                    // console.dir($event.response.rst.length)
                    const result = $event.response.rst
                    const length = $event.response.rst.length
                    this.datas = [];
                    for(let i=0; i<length; i++){
                        //DBから取得したList情報をdatasに格納する
                        that.datas.push({id: result[i]['id'], date:result[i]['date'], text:result[i]['text'], isDone:result[i]['done_flg']})                          
                    }

                }else {
                    //メッセージ表示
                    store.setMessage($event.response.msg, false)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }

                }
                
            })
        },
        makeDatas() {
            return this.datas
        },
        deleteItem(id) {
            controller.deleteTweetSchedule_ajax(id.listId)
            controller.$once('AJAX_COMPLETE_DELETETWEETSCHEDULE', ($event) => {

                if($event.response.res === 'OK'){
                    // console.log('リクエストに成功しました. AJAX_COMPLETE_DELETETWEETSCHEDULE') 
                     //メッセージ表示
                    store.setMessage($event.response.msg, true)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }

                    this.datas = _.reject(this.datas, { 'id': id.listId });

                }else {
                    // console.log('リクエストに失敗しました')
                    //メッセージ表示
                    store.setMessage($event.response.msg, false)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }

                }
                
            })
        },
        addItem(event) {
            let that = this
            //日付、ツイート内容が空の場合
            if(this.yourValue === null || this.text===''){
                store.setMessage('ツイート時刻と内容を記入してください', false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
                return
            }

            const now = new Date()
            const now_ms = now.getTime();
            var reserveTime = Date.parse(this.yourValue)
            // store.setReservedTime(reserveTime)
            this.reserveTimes = reserveTime
            //何ms後にツイートをするのか
            const dif_time = reserveTime - now_ms;

            // console.log('reserveTime'+reserveTime)
            // console.log('now_ms'+now_ms)
            // console.log('dif_time:'+dif_time)
            //過去の時間を指定していた場合
            if(dif_time <= 0) {
                store.setMessage('過去の時間は設定することができません', false)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
                return
            }
            //予約日時、ツイート内容をデータベースに保存する
            const id = this.getId() //一意のidを発行しておく。このidをDBに保存する

            //予約情報をStoreに保存しておく。crontabfunc.vueで使う
            store.setReservedItem(id, reserveTime ,this.text)

            controller.saveTweetSchedule_ajax(id, this.text, this.yourValue)
            controller.$once('AJAX_COMPLETE_SAVETWEETSCHEDULE', ($event) => {

                if($event.response.res === 'OK'){
                    // console.log('リクエストに成功しました. AJAX_COMPLETE_SAVETWEETSCHEDULE')
                    // console.dir($event.response)
                    //メッセージ表示
                    store.setMessage($event.response.msg, true)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }

                    //watchを開始 
                    this.$crontab.enableJob('tweetwatch')
                    store.setCronStatus(true) //watch開始
                    
                    //Listに追加
                    that.datas.push({id: id, date:that.yourValue, text:that.text, isDone:false})                      

                }else {
                    //メッセージ表示
                    store.setMessage($event.response.msg, false)
                    const message = store.getMessage();
                    if(message.msg !== ''){
                        controller.emit_message(message)  
                    }
                }                
            })

        },
        getId: function() {
            let strong = 1000;
            return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16);
        }
    }

}




</script>