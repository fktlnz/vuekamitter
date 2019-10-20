
import Vue from 'vue'
import VueCrontab from 'vue-crontab'
import { tweetWatch, startAutoLike, startAutoFollow, reStartAutoFollow} from './crontabfunc.vue'

export default () => {
  /* change the value of setInterval inside VueCrontab. */
  // VueCrontab.setOption({
  //   interval: 100,
  //   auto_start : false
  // })

  let result = VueCrontab.addJob([
    {        
        name: 'tweetwatch',
        interval: {    
            seconds: '/1',      
        },
        job: tweetWatch,
    },    
  ])
  let result2 = VueCrontab.addJob([
    {        
        name: 'startAutoLike',
        interval: {            
            seconds: '/60',      
        },
        job: startAutoLike,
    },    
  ])

  let result3 = VueCrontab.addJob([
    {        
        name: 'startAutoFollow',
        interval: {    
            seconds: '/1', //1s毎とするが、初めの一回実行されたあとすぐにdisableJobする      
        },
        job: startAutoFollow,
    },    
  ])

  let result4 = VueCrontab.addJob([
    {        
        name: 'reStartAutoFollow',
        interval: {
            minutes: '/1', //15分後に開始する
        },
        job: reStartAutoFollow,
    },    
  ])
  VueCrontab.disableJob('tweetwatch')
  VueCrontab.disableJob('reStartAutoFollow')
  console.log(result)
  console.log(result2)
  console.log(result3)
  console.log(result4)
}