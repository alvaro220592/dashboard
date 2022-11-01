import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LoginComponent from './Pages/Login/LoginComponent'
import HomeComponent from './Pages/Home/HomeComponent'

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: LoginComponent },
  { path: '/home', name: 'home', component: HomeComponent },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
