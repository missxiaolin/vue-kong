// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// eslint-disable-next-line
import store from './store'

// 权限
import './permission' // vuex

Vue.config.productionTip = false

Vue.use(ElementUI)

try {
  var angejiaLogo = ''
  var angejiaCulture = '%c理想与激情 (Dream & Passion)\n做最好的自己，把事情做到极致 (Do Your Best, Make Things Best.)\n目标一致，团队一心(One Goal, One Team)\n专注要事，快速行动 (Stay Focused and Move Fast)\n帮助他人成功 (Make Others Great)\n'
  var angejiaZhaopin = '%c加入我们，你的人生会更精彩。\n'

  if (window.console && window.console.log) {
    console.log(angejiaLogo + angejiaCulture + angejiaZhaopin, 'color:#FF8000', 'color:#F1A40E')
    console.log('%c请将简历发送至：xb.wang@chengnuozx.com（邮件标题请以“姓名-应聘XX职位-来自console”命名）。', 'color:red')
    console.log('%c职位介绍：', 'color:red')
  }
} catch (e) {
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
