import Vue from 'vue'
import Router from 'vue-router'
import SignUp from './component/SignUp.vue'
import SignIn from './component/SignIn.vue'
import Home from './component/Home.vue'
import Like from './component/RegisterLikeWord.vue'
import Keywords from './component/RegisterFollowerSearchKeyword.vue'
import Target from './component/RegisterTargetAccount.vue'
import Twtschedule from './component/RegisterTweetSchedule.vue'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
        {
            path: '/',
            name: 'signin',
            component: SignIn
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
        
    ]
})