import { shallowMount } from '@vue/test-utils';
import controller from '../src/js/component/Controller.vue'
import Login from '../src/js/component/SignIn.vue';
import Signup from '../src/js/component/Signup.vue';
import flushPromises from 'flush-promises';
// import jest from 'jest'
// var assert = require('assert');
// jest.mock('axios')
import { URLSearchParams } from 'url';
global.URLSearchParams = URLSearchParams

describe('Kamitterテスト', () => {
  
  it('ログインテスト（成功）', (done) => {
    const login = shallowMount(Login);
    login.setData({
      data: {
        username: 'test',
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

  it('ログインテスト（失敗）', (done) => {
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
        expect(rst).toBe('NG')
        done()
      })
    })

  });

  // it('ログインユーザーチェック（NOTLOGIN）', async () => {      
  //   // const login = shallowMount(Login)
  //   controller.checkLogin_ajax();
  //   let rst = '';    
  //   await flushPromises();
  //   controller.$on('AJAX_COMPLETE_CHECKLOGIN', ($event) => {
  //     rst = $event.response.res;            
  //     expect(rst).toBe('OK')
  //   })    
    
  // });

  it('ユーザー登録（再パスワード不一致）', (done) => {
    const signup = shallowMount(Signup);
    signup.setData({
      data: {
        username: 'fktlnz',
        email: 'fktlnz@gmail.com',
        password: 'newnew1',
        re_pass: 'newnew',
      }
    })
    // const login = shallowMount(Login)
    signup.find('.c-btn').trigger('click');

    signup.vm.$nextTick(() => {
      let rst = '';
      controller.$on('AJAX_COMPLETE_SIGNUP', ($event) => {
        rst = $event.response.error["re_pass"];
        expect(rst).toBe('『パスワード再入力』は『パスワード』と一致していません。')
        done()
      })
    })

  });

  it('ユーザー登録（メールアドレス形式でない）', (done) => {
    const signup = shallowMount(Signup);
    signup.setData({
      data: {
        username: 'fktlnz',
        email: 'fktlnz@@gmail.com',
        password: 'newnew',
        re_pass: 'newnew',
      }
    })
    // const login = shallowMount(Login)
    signup.find('.c-btn').trigger('click');

    signup.vm.$nextTick(() => {
      let rst = '';
      controller.$on('AJAX_COMPLETE_SIGNUP', ($event) => {
        rst = $event.response.error["email"];
        expect(rst).toBe('Email に、有効でないメールアドレスが含まれています。')
        done()
      })
    })

  });

  
  it('ユーザー登録（ユーザー名が空）', (done) => {
    const signup = shallowMount(Signup);
    signup.setData({
      data: {
        username: '',
        email: 'fktlnz@gmail.com',
        password: 'newnew',
        re_pass: 'newnew',
      }
    })
    // const login = shallowMount(Login)
    signup.find('.c-btn').trigger('click');

    signup.vm.$nextTick(() => {
      let rst = '';
      controller.$on('AJAX_COMPLETE_SIGNUP', ($event) => {
        rst = $event.response.error["username"];
        expect(rst).toBe('ユーザー名 は必須入力です。')
        done()
      })
    })

  });

  it('ユーザー登録（emailが空）', (done) => {
    const signup = shallowMount(Signup);
    signup.setData({
      data: {
        username: 'fktlnz',
        email: '',
        password: 'newnew',
        re_pass: 'newnew',
      }
    })
    // const login = shallowMount(Login)
    signup.find('.c-btn').trigger('click');

    signup.vm.$nextTick(() => {
      let rst = '';
      controller.$on('AJAX_COMPLETE_SIGNUP', ($event) => {
        rst = $event.response.error["email"];
        expect(rst).toBe('Email は必須入力です。')
        done()
      })
    })

  });

  it('updateAccount ログインユーザーが認証しているアカウントを取得する', async () => {
    
    // const login = shallowMount(Login)
    const rst = await controller.updateAccount_ajax();
    expect(rst.res).toBe('NG')

  });

  it('getUserInfo myaccountテーブルから情報を取得する', async () => {
    
    // const login = shallowMount(Login)
    const rst = await controller.getUserInfo_ajax('fktlnz');
    expect(rst.res).toBe('NG')

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
