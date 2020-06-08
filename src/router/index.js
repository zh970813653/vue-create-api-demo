import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '../components/index.vue'
// import JavaScript from '../components/javaScript.vue'
// import Scroll from '../components/scroll.vue'
// import Father from '../components/index_father.vue'
// import Home from '../views/home.vue'
// import Echarts from 'echarts'
Vue.use(VueRouter)
// Vue.prototype.$echarts = Echarts
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
