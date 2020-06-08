import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './js/filter'
import './assets/styles/common.scss'
import './utils/create-api'
import './utils/boost'
// import Echarts from 'echarts'
// import '@/assets/styles/common.less'
Vue.config.productionTip = false
// Vue.prototype.$echarts = Echarts

// eslint-disable-next-line no-unused-vars

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
