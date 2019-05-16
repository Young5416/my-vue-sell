import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import VueRouter from 'vue-router'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

Vue.use(VueRouter)

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Vue.use({
  vm
})
