// import Vue from 'vue'
import VueCrontab from 'vue-crontab'
import crontab from "./component/crontab.js"
import router from './router.js'
import App from './component/mainView.vue'
// import App from './component/mainView.vue'

Vue.use(VueCrontab)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

crontab()



