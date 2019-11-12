<script>

export {tweetWatch, startAutoLike, startAutoFollow, reStartAutoFollow, startAutoUnFollow}

import store from './Store.vue'
import controller from './Controller.vue'
import VueCrontab from 'vue-crontab'

function tweetWatch() {
    let now = new Date()
    let now_ms = now.getTime();

    //storeから予約情報を取得する
    //reservedItem : {id:xxx,reserveTime:xxx,text:xxx}
    let reservedItem = store.getReservedItem()

    let reserveTime = reservedItem.reserveTime
    let dif_time = reserveTime - now_ms    
    // console.log('ツイート予約　待機中')
    if(reserveTime < now_ms) {
        // console.log('ツイートします')
        VueCrontab.disableJob('tweetwatch')

        //ツイートをサーバーにリクエストする        
        controller.tweet_ajax(reservedItem.id, reservedItem.text)                
        controller.$on('AJAX_COMPLETE_TWEET', ($event) => {

            if($event.response.res === 'OK'){
                // console.log('リクエストに成功しました. AJAX_COMPLETE_TWEET')
                // console.dir($event.response)
                // console.log('that.datas update呼ぶ前')
                // console.log(this.datas)
                //this.updateDatas()
                store.setMessage($event.response.msg, true)

                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
            }else {
                // this.loading = false
                // console.log('リクエストに失敗しました')
                store.setMessage('予約ツイートに失敗しました。ネットワーク管理者に問い合わせてください。', false)

                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
                }
            }            
        })        
    }
}

//自動フォローを開始する
function startAutoFollow() {   
    //自動フォロー動作条件
    //１．自動フォローが「待機中」である
    //２．自動いいねが動作中でない
    if(store.getAutoFollowCronStatus() === '1' && store.getAutoLikeCronStatus() !== '2'){

        //自動フォローを再開する
        controller.startAutoFollow_ajax() 
        
        //1度の実施で十分なので、1度実施したら停止する
        VueCrontab.disableJob('startAutoFollow')  
        
    }else{
        console.log('自動フォロー監視中です')
    }
    
    

}

//自動フォローを15分後に再開する関数
function reStartAutoFollow() {

    //自動フォロー再開関数を実行状態に設定する
    store.setRestartAutoFollowCronStatus(true)

    let now = new Date()
    let now_ms = now.getTime();

    //storeから次のフォロー開始時間を取得する
    const reFollowTime = store.getNextFollowTime()
    const nextFollowTime = reFollowTime.next
    
    let dif_time = nextFollowTime - now_ms
    // store.setNextFollowTime(dif_time, now_ms)    
    console.log('次の自動フォローまで=>'+dif_time)

    if(nextFollowTime < now_ms) {

        //自動フォロー動作条件
        //１．自動フォローが「待機中」である
        //２．自動いいねが動作中でない
        if(store.getAutoFollowCronStatus() === '1' && store.getAutoLikeCronStatus() !== '2'){
    
            //自動フォローを再開する
            controller.startAutoFollow_ajax() 
            
            //15分後に1度の実施で十分なので、1度実施したら停止する
            VueCrontab.disableJob('reStartAutoFollow')  
            //自動フォロー再開関数を停止状態に設定する
            store.setRestartAutoFollowCronStatus(false)
    
        }else{
            // console.log('自動フォロー再開監視中です')
        }
    
    }

}

function startAutoLike() {
    
    //自動いいね動作条件
    //１．自動フォローが動作していない
    //２．自動アンフォローが動作していない
    //３．自動いいねが「待機中」である
    if(store.getAutoLikeCronStatus() === '1' && store.getAutoFollowCronStatus() !== '2' && store.getAutoUnFollowCronStatus() !== '2'){        
        // console.log('startAutoLike動作中')
        controller.startAutoLike_ajax()

        //以下の動作いる？
        controller.$once('AJAX_COMPLETE_AUTOLIKE', ($event) => {

            if($event.response.res === 'OK'){
                // console.log('リクエストに成功しました. AJAX_COMPLETE_AUTOLIKE')
                // console.dir($event.response.rst)                   
                
                //メッセージ表示
                store.setMessage($event.response.msg, true)
                const message = store.getMessage();
                if(message.msg !== ''){
                    controller.emit_message(message)  
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
    }else{
        // console.log('自動いいね監視中')
    }

}

//自動アンフォローを開始する
function startAutoUnFollow() {   

    let now = new Date()
    let now_ms = now.getTime();

    //storeから次のフォロー開始時間を取得する
    const UnFollowTime = store.getNextUnFollowTime()

    //storeからフォロー解除設定を読み込む
    const cfg = store.getConfigValue();
    //フォロー解除を開始するフォロー数を取得する
    const start_friends = cfg.friends_unfollow;
    console.log('フォロー解除開始人数：'+start_friends)
    
    let dif_time = UnFollowTime - now_ms    
    
    //5000人以上になったらアンフォローする
    //アンフォローは15分は最低あける
    if(store.getFriendsCount() > start_friends && (UnFollowTime < now_ms) && store.getAutoUnFollowCronStatus() === '1'){

        //自動アンフォローを開始する
        controller.startAutoUnFollow_ajax() 
        
        //自動アンフォロー実行中は停止する
        VueCrontab.disableJob('startAutoUnFollow')  
        
    }else{
        // console.log('自動アンフォロー監視中です =>dif_time:'+dif_time)
    }

}


</script>