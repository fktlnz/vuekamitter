<script>
/* ================================
# Controller用vueインスタンス
画面とバックエンド（fuelphp）との橋渡しの役割
画面からDBへのアクセスはこのクラスを通す
=================================*/

// import Vue from 'vue';
// Ajax通信ライブラリ
import axios from 'axios';

// Json取得のベースURL
const URL_BASE = 'http://localhost:8888/KamitterApp/KamitterAPI/public/api/';
//const URL_BASE = 'http://service-1.masashisite.com/KamitterAPI/public/api/';

// Vue.js のインスタンス
module.exports = new Vue({
  data: {
    // Jsonデータ格納用
    search_list: []
  },
  methods: {
    // Ajax通信でJsonを取得し、特定のプロパティに格納する
    // 取得したら GET_AJAX_COMPLETE で通知する
    get_ajax(url, name) {
      return axios.get(URL_BASE + url)
      .then((res) => {
        Vue.set(this, name, res.data);
        this.$emit('GET_AJAX_COMPLETE');
      });
    },
    // プロパティ名を指定してデータを取得
    get_data(name) {
      return this.$data[name];
    },
    checkLogin_ajax(){
      return axios.get(URL_BASE + 'checkLogin')
      .then((res) => {
          this.$emit('AJAX_COMPLETE_CHECKLOGIN', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_COMPLETE_CHECKLOGIN', {response: json});
      })
    },
    //ユーザー登録処理
    signUp_ajax(form_data) {
        let params = new URLSearchParams();
        params.append('username',form_data.username);
        params.append('email',form_data.email);
        params.append('password',form_data.password);
        params.append('re_pass',form_data.re_pass);
        
        return axios.post(URL_BASE + 'signup', params)
        .then((res) => {
            this.$emit('AJAX_COMPLETE_SIGNUP', {response: res.data});
        })
        .catch((res) => {
          const json = {
            'res' : 'NG',
            'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
          }    
          this.$emit('AJAX_COMPLETE_SIGNUP', {response: json});
        })
    },
    //ログイン処理
    signIn_ajax(form_data) {
        let params = new URLSearchParams();
        params.append('username',form_data.username);
        params.append('password',form_data.password);
        
        axios.post(URL_BASE + 'signin', params)
        .then((res) => {
            this.$emit('AJAX_COMPLETE_SIGNIN', {response: res.data});
        })
        .catch((res) => {
          const json = {
            'res' : 'NG',
            'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
          }    
            this.$emit('AJAX_COMPLETE_SIGNIN', {response: json});
        })

    },
    //ログインしているユーザーの情報を取得する
    getLoginUserInfo_ajax() {
      return axios.get(URL_BASE + 'getloginuserinfo')
      .then((res) => {
          this.$emit('AJAX_COMPLETE_GETLOGINUSERINFO', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_COMPLETE_GETLOGINUSERINFO', {response: json});
      })
    },
    //ログインしているユーザーの情報を変更する
    changeLoginUserInfo_ajax(data) {
      let params = new URLSearchParams();
      params.append('email',data.email);

      return axios.post(URL_BASE + 'changeloginuserinfo', params)
      .then((res) => {
          this.$emit('AJAX_COMPLETE_CHANGELOGINUSERINFO', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_COMPLETE_CHANGELOGINUSERINFO', {response: json});
      })
    },
    //パスワードを変更する
    changePassword_ajax(data) {
      let params = new URLSearchParams();
      params.append('password_old',data.password_old);
      params.append('password_new',data.password_new);
      params.append('re_password_new',data.re_password_new);

      return axios.post(URL_BASE + 'changepassword', params)
      .then((res) => {
          this.$emit('AJAX_COMPLETE_CHANGEPASSWORD', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_COMPLETE_CHANGEPASSWORD', {response: json});
      })
    },
    /* =========================================================
    # パスワードリマインダー
    ============================================================*/ 
    //認証コードを送信する
    passRemindSend_ajax(username, email){
      let params = new URLSearchParams();
      params.append('email',email);
      params.append('username',username);

      return axios.post(URL_BASE + 'passremindsend', params)
        .then((res) => {
            this.$emit('AJAX_COMPLETE_PASSREMINDSEND', {response: res.data});
        })
        .catch((res) => {
          const json = {
            'res' : 'NG',
            'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
          }    
          this.$emit('AJAX_COMPLETE_PASSREMINDSEND', {response: json});
        })
    },
    //認証コードを確認して新しいパスワードを送信する
    passRemindRecieve_ajax(code){
      let params = new URLSearchParams();
      params.append('code',code);

      return axios.post(URL_BASE + 'passremindrecieve', params)
        .then((res) => {
            this.$emit('AJAX_COMPLETE_PASSREMINDRECIEVE', {response: res.data});
        })
        .catch((res) => {
          const json = {
            'res' : 'NG',
            'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
          }    
          this.$emit('AJAX_COMPLETE_PASSREMINDRECIEVE', {response: json});
        })
    },



    //Twitterアカウントの認証処理(auth_tokenとoauth_verifierの取得)
    certify_ajax() {        
        return axios.get(URL_BASE + 'certify')
        .then((res) => {
            this.$emit('AJAX_COMPLETE_GETREQUEST', {response: res.data});
        })
        .catch((res) => {
          const json = {
            'res' : 'NG',
            'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
          }    
          this.$emit('AJAX_COMPLETE_GETREQUEST', {response: json});
        })
    },
    //取得したoauth_tokenとoauth_verifierを使ってアクセストークンを取得。サーバー側でDB保存
    saveToken_ajax(oauth_token, oauth_verifier) {
      
      return axios.get(URL_BASE + 'certify?oauth_token='+ oauth_token + '&oauth_verifier=' + oauth_verifier)
        .then((res) => {
            this.$emit('AJAX_COMPLETE_CERTIFY', {response: res.data});
        })
        .catch((res) => {
          const json = {
            'res' : 'NG',
            'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
          }    
            this.$emit('AJAX_COMPLETE_CERTIFY', {response: json});
        })
    },
    //ログインユーザーが認証しているアカウントをサーバーから取得する
    updateAccount_ajax() {
      return axios.get(URL_BASE + 'getaccount')
      .then((res) => {
          this.$emit('AJAX_COMPLETE_GETACCOUNT', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_COMPLETE_GETACCOUNT', {response: json});
      })
    },
    deleteAccount_ajax(screen_name) {
      return axios.get(URL_BASE + 'deleteaccount?screen_name=' + screen_name)
      .then((res) => {
          this.$emit('AJAX_COMPLETE_DELETEACCOUNT', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_COMPLETE_DELETEACCOUNT', {response: json});
      })
    },
    getUserInfo_ajax(screen_name) {
      return axios.get(URL_BASE + 'getuserinfo?screen_name=' + screen_name)
      .then((res) => {
          this.$emit('AJAX_COMPLETE_GETUSERINFO', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_COMPLETE_GETUSERINFO', {response: json});
      })
    },
    getActiveUser_ajax(screen_name) {
      return axios.get(URL_BASE + 'getactiveuser')
      .then((res) => {
          this.$emit('AJAX_COMPLETE_GETACTIVEUSER', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        }    
        this.$emit('AJAX_COMPLETE_GETACTIVEUSER', {response: json});
      })
    },
    getTwitterProfile_ajax(screen_name) {      
      return axios.get(URL_BASE + 'gettwitterprofile?screen_name='+screen_name)
      .then((res) => {       
          this.$emit('AJAX_COMPLETE_GETTWITTERPROFILE', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_COMPLETE_GETTWITTERPROFILE', {response: json});
      })
    },
    //ツイートを投稿する
    tweet_ajax(id, text) {
      return axios.get(URL_BASE + 'tweet?text='+text+'&id='+id)
      .then((res) => {
          this.$emit('AJAX_COMPLETE_TWEET', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_COMPLETE_TWEET', {response: json});
      })
    },
    //予約日時、ツイート内容をデータベースに保存するようAPIにリクエストする
    saveTweetSchedule_ajax(id, text, time) {
      let that = this
      return axios.get(URL_BASE + 'savetweetschedule?text='+text+'&time='+time+'&id='+id)
      .then((res) => {
          that.$emit('AJAX_COMPLETE_SAVETWEETSCHEDULE', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        that.$emit('AJAX_COMPLETE_SAVETWEETSCHEDULE', {response: json});
      })
    },
    //予約日時、ツイート内容をデータベースから取得する
    getTweetSchedule_ajax() {
      return axios.get(URL_BASE + 'gettweetschedule')
      .then((res) => {
          this.$emit('AJAX_COMPLETE_GETTWEETSCHEDULE', {response: res.data});
          this.$emit('AJAX_DISPLAY_SCHEDULE_RESULT', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_COMPLETE_GETTWEETSCHEDULE', {response: json});
      })
    },
    //予約日時、ツイート内容をデータベースから論理削除する
    deleteTweetSchedule_ajax(word_id) {
      return axios.get(URL_BASE + 'deletetweetschedule?word_id='+word_id)
      .then((res) => {
          this.$emit('AJAX_COMPLETE_DELETETWEETSCHEDULE', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_COMPLETE_DELETETWEETSCHEDULE', {response: json});
      })
    },
    //いいねしたリストをセッションから取得する
    getLikedListSession_ajax() {
      return axios.get(URL_BASE + 'getlikedlistsession')
      .then((res) => {
          //HOME画面のイイネリストを更新する
          this.$emit('AJAX_DISPLAY_AUTOLIKE_RESULT', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。',
          'rst' : false
        }    
        //HOME画面のイイネリストを更新する
          this.$emit('AJAX_DISPLAY_AUTOLIKE_RESULT', {response: json});
      })
    },


    //フォローしたリストをDBから取得する
    getFollowedList_ajax() {
      return axios.get(URL_BASE + 'getfollowedlist')
      .then((res) => {
          //HOME画面のフォロー済リストを更新する
          this.$emit('AJAX_DISPLAY_AUTOFOLLOW_RESULT', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。',
          'rst' : false
        }    
        //HOME画面のフォロー済リストを更新する
          this.$emit('AJAX_DISPLAY_AUTOFOLLOW_RESULT', {response: json});
      })
    },

    //アンフォローしたリストをDBから取得する
    getUnFollowedList_ajax() {
      return axios.get(URL_BASE + 'getunfollowedlist')
      .then((res) => {
          //HOME画面のフォロー済リストを更新する
          this.$emit('AJAX_DISPLAY_AUTOUNFOLLOW_RESULT', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。',
          'rst' : false
        }    
        //HOME画面のフォロー済リストを更新する
          this.$emit('AJAX_DISPLAY_AUTOUNFOLLOW_RESULT', {response: json});
      })
    },
    emit_message(msg) {
      // console.log('メッセージを受信しました！'+msg)
      this.$emit('DISPLAY_MESSAGE', {message: msg})
    },

    /* ================================
    # crontabfuncから呼ばれる関数
    =================================*/
    //自動いいねを開始する
    startAutoLike_ajax() {

      //HOME画面の自動イイネステータスを実行中に変更する
      this.$emit('AJAX_CHANGE_AUTOLIKESTATUS', {response: '2'});
      return axios.get(URL_BASE + 'startautolike')
      .then((res) => {
          //HOME画面の自動イイネステータスを待機中に変更する
          this.$emit('AJAX_CHANGE_AUTOLIKESTATUS', {response: '1'});

          //HOME画面のイイネリストを更新する
          this.$emit('AJAX_DISPLAY_AUTOLIKE_RESULT', {response: res.data});
      })
      .catch((res) => {
        //HOME画面の自動イイネステータスを待機中に変更する
        this.$emit('AJAX_CHANGE_AUTOLIKESTATUS', {response: '1'});
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_COMPLETE_AUTOLIKE', {response: json});
      })
    },
    //自動フォローを開始
    startAutoFollow_ajax() {
      //HOME画面の自動イイネステータスを実行中に変更する
      this.$emit('AJAX_CHANGE_AUTOFOLLOWSTATUS', {response: '2'});
      return axios.get(URL_BASE + 'startautofollow')
      .then((res) => {
          //HOME画面のフォローステータスを待機中に変更する
          this.$emit('AJAX_CHANGE_AUTOFOLLOWSTATUS', {response: '1'});

          //HOME画面のフォローリストを更新する
          this.$emit('AJAX_DISPLAY_AUTOFOLLOW_RESULT', {response: res.data});
      })
      .catch((res) => {
        //HOME画面の自動イイネステータスを待機中に変更する
        this.$emit('AJAX_CHANGE_AUTOFOLLOWSTATUS', {response: '1'});
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_DISPLAY_AUTOFOLLOW_RESULT', {response: json});
      })
    },

    /* =========================================================
    # 自動イイネキーワード・フォロワーサーチキーワード登録画面 共通
    ============================================================*/    
    //キーワードをDBに保存する
    saveKeyword_ajax(id, likeword, option, type) {

      let params = new URLSearchParams();
      params.append('id',id);
      params.append('text',likeword);
      params.append('option',option);
      params.append('type',type);

      return axios.post(URL_BASE + 'savekeyword', params)
      .then((res) => {
        if(type===0){//フォロワーサーチキーワード
          this.$emit('AJAX_COMPLETE_SAVEFOLLOWERSEARCHWORD', {response: res.data});
        }else if(type===1){//イイネキーワード}
          this.$emit('AJAX_COMPLETE_SAVELIKEWORD', {response: res.data});
        }
          
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }
        if(type===0){//フォロワーサーチキーワード
          this.$emit('AJAX_COMPLETE_SAVEFOLLOWERSEARCHWORD', {response: json});
        }else if(type===1){//イイネキーワード}
          this.$emit('AJAX_COMPLETE_SAVELIKEWORD', {response: json});
        }
      })
    },
    //DBからキーワードを取得する
    getKeyword_ajax(type) {
      return axios.get(URL_BASE + 'getkeyword?type='+type)
      .then((res) => {
          if(type===0){//フォロワーサーチキーワード
            this.$emit('AJAX_COMPLETE_GETFOLLOWERSEARCHWORD', {response: res.data});
          }else if(type===1){//イイネキーワード}
            this.$emit('AJAX_COMPLETE_GETLIKEWORD', {response: res.data});
          }
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        if(type===0){//フォロワーサーチキーワード
          this.$emit('AJAX_COMPLETE_GETFOLLOWERSEARCHWORD', {response: json});
        }else if(type===1){//イイネキーワード}
          this.$emit('AJAX_COMPLETE_GETLIKEWORD', {response: json});
        }
      })
    },
    //DBからキーワードを論理削除する
    deleteKeyword_ajax(word_id, type) {
      return axios.get(URL_BASE + 'deletekeyword?word_id='+word_id)
      .then((res) => {
        if(type===0){//フォロワーサーチキーワード
          this.$emit('AJAX_COMPLETE_DELETEFOLLOWERSEARCHWORD', {response: res.data});
        }else if(type===1){//イイネキーワード}
          this.$emit('AJAX_COMPLETE_DELETELIKEWORD', {response: res.data});
        }
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        if(type===0){//フォロワーサーチキーワード
          this.$emit('AJAX_COMPLETE_DELETEFOLLOWERSEARCHWORD', {response: json});
        }else if(type===1){//イイネキーワード}
          this.$emit('AJAX_COMPLETE_DELETELIKEWORD', {response: json});
        }
      })
    },

    /* ================================
    # ターゲットアカウント登録画面
    =================================*/
    //ユーザーアカウントをDBに保存する　type: 0:ターゲットアカウント 1:フォロー済アカウント 2:アンフォローアカウント
    saveUserAccount_ajax(id, screen_name, type) {

      let params = new URLSearchParams();
      params.append('id',id);
      params.append('username',screen_name);
      params.append('type',type);
      
      return axios.post(URL_BASE + 'saveuseraccount', params)
      .then((res) => {
        if(type===0){//ターゲットアカウント
          this.$emit('AJAX_COMPLETE_SAVETARGETACCOUNT', {response: res.data});
        }else if(type===1){//フォロー済アカウント
          this.$emit('AJAX_COMPLETE_SAVEFOLLOWDONEACCOUNT', {response: res.data});
        }else if(type===2){//アンフォローアカウント
          this.$emit('AJAX_COMPLETE_SAVEUNFOLLOWACCOUNT', {response: res.data});
        }
          
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }
        if(type===0){//ターゲットアカウント
          this.$emit('AJAX_COMPLETE_SAVETARGETACCOUNT', {response: json});
        }else if(type===1){//フォロー済アカウント
          this.$emit('AJAX_COMPLETE_SAVEFOLLOWDONEACCOUNT', {response: json});
        }else if(type===2){//アンフォローアカウント
          this.$emit('AJAX_COMPLETE_SAVEUNFOLLOWACCOUNT', {response: json});
        }
      })
    },
    //DBからユーザーアカウントを取得する
    getUserAccount_ajax(type) {
      return axios.get(URL_BASE + 'getuseraccount?type='+type)
      .then((res) => {
        if(type===0){//ターゲットアカウント
          this.$emit('AJAX_COMPLETE_GETTARGETACCOUNT', {response: res.data});
        }else if(type===1){//フォロー済アカウント
          this.$emit('AJAX_COMPLETE_GETFOLLOWDONEACCOUNT', {response: res.data});
        }else if(type===2){//アンフォローアカウント
          this.$emit('AJAX_COMPLETE_GETUNFOLLOWACCOUNT', {response: res.data});
        }
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        if(type===0){//ターゲットアカウント
          this.$emit('AJAX_COMPLETE_GETTARGETACCOUNT', {response: json});
        }else if(type===1){//フォロー済アカウント
          this.$emit('AJAX_COMPLETE_GETFOLLOWDONEACCOUNT', {response: json});
        }else if(type===2){//アンフォローアカウント
          this.$emit('AJAX_COMPLETE_GETUNFOLLOWACCOUNT', {response: json});
        }
      })
    },
    //DBからユーザーアカウントを論理削除する
    deleteUserAccount_ajax(word_id, type) {
      return axios.get(URL_BASE + 'deleteuseraccount?word_id='+word_id)
      .then((res) => {
        if(type===0){//ターゲットアカウント
          this.$emit('AJAX_COMPLETE_DELETETARGETACCOUNT', {response: res.data});
        }else if(type===1){//フォロー済アカウント
          this.$emit('AJAX_COMPLETE_DELETEFOLLOWDONEACCOUNT', {response: res.data});
        }else if(type===2){//アンフォローアカウント
          this.$emit('AJAX_COMPLETE_DELETEUNFOLLOWACCOUNT', {response: res.data});
        }
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'error' : {'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'}   
        }    
        if(type===0){//ターゲットアカウント
          this.$emit('AJAX_COMPLETE_DELETETARGETACCOUNT', {response: json});
        }else if(type===1){//フォロー済アカウント
          this.$emit('AJAX_COMPLETE_DELETEFOLLOWDONEACCOUNT', {response: json});
        }else if(type===2){//アンフォローアカウント
          this.$emit('AJAX_COMPLETE_DELETEUNFOLLOWACCOUNT', {response: json});
        }
      })
    },
    //Twitterのアカウントが存在するか確認する
    CheckUserAccountExist_ajax(screen_name) {
      return axios.get(URL_BASE + 'checkuseraccountexist?screen_name='+screen_name)
      .then((res) => {        
          this.$emit('AJAX_COMPLETE_CHECKUSERACCOUNTEXIST', {response: res.data});        
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }
        this.$emit('AJAX_COMPLETE_CHECKUSERACCOUNTEXIST', {response: json});        
      })
    },

    /* =========================================================
    # 自動アンフォロー
    ============================================================*/  
    //自動アンフォローを開始
    startAutoUnFollow_ajax() {
      //HOME画面の自動イイネステータスを実行中に変更する
      this.$emit('AJAX_CHANGE_AUTOUNFOLLOWSTATUS', {response: '2'});
      return axios.get(URL_BASE + 'startautounfollow')
      .then((res) => {
          //HOME画面のフォローステータスを待機中に変更する
          this.$emit('AJAX_CHANGE_AUTOUNFOLLOWSTATUS', {response: '1'});

          //HOME画面のフォローリストを更新する
          this.$emit('AJAX_DISPLAY_AUTOUNFOLLOW_RESULT', {response: res.data});
      })
      .catch((res) => {
        //HOME画面の自動イイネステータスを待機中に変更する
        this.$emit('AJAX_CHANGE_AUTOUNFOLLOWSTATUS', {response: '1'});
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_DISPLAY_AUTOUNFOLLOW_RESULT', {response: json});
      })
    },
    //自動アンフォローの設定を変更する
    changeAccountUnfollowConfig_ajax(data) {
      let params = new URLSearchParams();
      params.append('nonactiveday_unfollow',data.nonactiveday);
      params.append('dayafterfollow_unfollow',data.dayafterfollow);
      params.append('friends_unfollow',data.friends);

      return axios.post(URL_BASE + 'changeaccountconfig', params)
      .then((res) => {          
          this.$emit('AJAX_FINISH_CHANGECONFIG_UNFOLLOW', {response: res.data});
      })
      .catch((res) => {        
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_FINISH_CHANGECONFIG_UNFOLLOW', {response: json});
      })
    },
    //自動アンフォローの設定を取得する
    getAccountUnfollowConfig_ajax() {      

      return axios.get(URL_BASE + 'getaccountconfig')
      .then((res) => {          
          this.$emit('AJAX_FINISH_GETCONFIG_UNFOLLOW', {response: res.data});
      })
      .catch((res) => {        
        const json = {
          'res' : 'NG',
          'msg' : 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_FINISH_GETCONFIG_UNFOLLOW', {response: json});
      })
    },

    /* =========================================================
    # メール配信
    ============================================================*/ 
    //セッションのメール配信状態をセットする
    changeMailStatus_ajax(status) {
      return axios.get(URL_BASE + 'changemailstatus?status='+status)
      .then((res) => {          
          this.$emit('AJAX_FINISH_CHANGE_MAILSTATUS', {response: res.data});
      })
      .catch((res) => {
        const rst = res.data
        this.$emit('AJAX_FINISH_CHANGE_MAILSTATUS', {response: rst});
      })
    },

    /* =========================================================
    # ログアウト
    ============================================================*/ 
    logout_ajax() {      
      return axios.get(URL_BASE + 'logout')
      .then((res) => {
          //HOME画面にログアウトを知らせる
          this.$emit('AJAX_FINISH_LOGOUT_RESULT', {response: res.data});
      })
      .catch((res) => {
        const json = {
          'res' : 'NG',
          'msg' : 'ログアウトに失敗しました。ネットワーク管理者に問い合わせてください。'   
        }    
        this.$emit('AJAX_FINISH_LOGOUT_RESULT', {response: json});
      })
    },
       
    /* =========================================================
    # メッセージ
    ============================================================*/ 
    //メッセージを表示する
    emit_message(msg) {
      // console.log('メッセージを受信しました！'+msg)
      this.$emit('DISPLAY_MESSAGE', {message: msg})
    },
  
  }
});
</script>