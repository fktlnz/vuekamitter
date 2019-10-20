<script>
/* ================================
# Controller用vueインスタンス
画面とバックエンド（fuelphp）との橋渡しの役割
画面からDBへのアクセスはこのクラスを通す
=================================*/

import Vue from 'vue';

// Vue.js のインスタンス
module.exports = new Vue({
  data: {
    // メッセージ格納用
    message: {
        msg: '',
        status: false,
    },
      IstweetwatchJobExec: false, //cronが動作中かどうか（true: 自動ツイートのwatchが動作中　false:動作していない）
      IsrestartAutoFollowJobExec: false, //cronが動作中かどうか（true: 自動ツイートのwatchが動作中　false:動作していない）
      IsStartAutoFollowJobExec: false, //cronが動作中かどうか（true: 自動ツイートのwatchが動作中　false:動作していない）
      IsAutoLikeExec: '0', //cronが動作中かどうか 0:停止中　1:待機中　2:実行中
      IsAutoFollowExec: '0', //cronが動作中かどうか 0:停止中　1:待機中　2:実行中
      reservedTime: null,
      reserveItem: {
        id: null,
        reserveTime: null,
        text: null
      },
      reFollowTime: {
        now:null,
        next:null
      },
  },
  methods: {
    // Ajax通信でJsonを取得し、特定のプロパティに格納する
    // 取得したら GET_AJAX_COMPLETE で通知する
    getMessage() {
      console.log('getMessage')
        const msg = this.message
        //message初期化
        this.message = {msg: '', status:false}
        console.dir(msg)
        console.dir(this.message)
        return msg
    },
    // プロパティ名を指定してデータを取得
    setMessage(msg, status) {
        console.log('setMessage')
        console.dir(msg)
        console.dir(status)
        this.message.msg = msg
        this.message.status = status
    },
    //自動いいね機能のcron状態を取得
    getAutoLikeCronStatus() {
      return this.IsAutoLikeExec
    },
    //自動いいね機能のcron状態をセット
    setAutoLikeCronStatus(status) {
      this.IsAutoLikeExec = status
    },
    //自動フォロー機能のcron状態を取得
    getAutoFollowCronStatus() {
      return this.IsAutoFollowExec
    },
    //自動フォロー機能のcron状態をセット
    setAutoFollowCronStatus(status) {
      this.IsAutoFollowExec = status
    },
    //自動フォロー再開関数の状態を取得（true false）    
    gettRestartAutoFollowCronStatus() {
      return this.IsrestartAutoFollowJobExec
    },
    //自動フォロー再開関数の状態をセット（true false） 
    setRestartAutoFollowCronStatus(status) {
      this.IsrestartAutoFollowJobExec = status
    },
    getCronStatus() {
      return this.IstweetwatchJobExec
    },
    setCronStatus(status) {
      this.IstweetwatchJobExec = status
    },
    getReservedTime() {
      console.log('予約時間を取得します：'+this.reservedTime)
      return this.reservedTime
    },
    setReservedTime(time) {
      console.log('予約時間を設置します：'+time)
      this.reservedTime = time
    },

    getReservedItem() {
      console.log('予約情報を取得します')
      console.dir(this.reserveItem)
      return this.reserveItem
    },
    setReservedItem(id, time, text) {
      
      this.reserveItem.id = id
      this.reserveItem.reserveTime = time
      this.reserveItem.text = text

      console.log('予約情報　id：'+this.reserveItem.id)
      console.log('予約情報　reserveTime：'+this.reserveItem.reserveTime)
      console.log('予約情報　text：'+this.reserveItem.text)
    },
    setNextFollowTime(nexttime, now) {
      this.reFollowTime.next = nexttime;
      this.reFollowTime.now = now;
      console.log('次のフォロー開始時間：'+this.reFollowTime)
    },
    getNextFollowTime() {
      return this.reFollowTime;
    }
    
  }
});
</script>