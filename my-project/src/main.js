// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import './assets/less/base.less'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'

Vue.config.productionTip = false
Vue.use(MintUI, IScrollView, IScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
