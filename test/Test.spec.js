import { shallowMount } from '@vue/test-utils';
import controller from '../src/js/component/Controller.vue'
import Login from '../src/js/component/SignIn.vue';
// import jest from 'jest'
var assert = require('assert');
// jest.mock('axios')
import { URLSearchParams } from 'url';
global.URLSearchParams = URLSearchParams

describe('Kamitterテスト', () => {
  
  it('SignIn_ajax', (done) => {
    const login = shallowMount(Login);
    login.setData({
      data: {
        username: 'test1',
        password: 'newnew'        
      }
    })    
    // const login = shallowMount(Login)
    login.find('.c-btn').trigger('click');    

    login.vm.$nextTick(() => {
      let rst = '';
      controller.$on('AJAX_COMPLETE_SIGNIN', ($event) => {
        rst = $event.response.res;
        expect(rst).toBe('OK')
        done()
      })
    })

  });

  // it('multiply(3,3)で、9が返ってくること', function() {
  //   assert.equal(controller.multiply(3, 3), 9);
  // });

  // it('evenOrOdd(4)で偶数が返ってくること', function() {
  //   assert.equal(controller.evenOrOdd(4), '偶数');
  // });

  // it('evenOrOdd(5)で奇数が返ってくること', function() {
  //   assert.equal(controller.evenOrOdd(5), '奇数');
  // });

});
