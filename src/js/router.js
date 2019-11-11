// import Vue from 'vue'
import Router from 'vue-router'
import Top from './component/topPage.vue'
import SignUp from './component/SignUp.vue'
import SignIn from './component/SignIn.vue'
import Home from './component/Home.vue'
import Like from './component/RegisterLikeWord.vue'
import Keywords from './component/RegisterFollowerSearchKeyword.vue'
import Target from './component/RegisterTargetAccount.vue'
import Twtschedule from './component/RegisterTweetSchedule.vue'
import PassRemindSend from './component/passRemindSend.vue'
import PassRemindRecieve from './component/passRemindRecieve.vue'
import EditUserInfo from './component/EditUserInfo.vue'
import ChangePassword from './component/ChangePassword.vue'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/signin',
            name: 'signin',
            component: SignIn
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
        {
            path: '/',
            name: 'top',
            component: Top
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/like',
            name: 'like',
            component: Like
        },
        {
            path: '/tweetschedule',
            name: 'twtschedule',
            component: Twtschedule
        },
        {
            path: '/keywords',
            name: 'keywords',
            component: Keywords
        },
        {
            path: '/target',
            name: 'target',
            component: Target
        },
        {
            path: '/remindsend',
            name: 'remindsend',
            component: PassRemindSend
        },
        {
            path: '/remindrecieve',
            name: 'remindrecieve',
            component: PassRemindRecieve
        },
        {
            path: '/edituser',
            name: 'edituser',
            component: EditUserInfo
        },
        {
            path: '/changepass',
            name: 'changepass',
            component: ChangePassword
        },
        {
            path: '*',
            component:SignIn
        }
        
    ]
})