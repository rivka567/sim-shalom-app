import Vue from 'vue'
import Home from '../views/Home.vue'
import Tfila from '../components/Tfila.vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tfila',
    name: 'Tfila',
    component: Tfila,
    props:true
  },

  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
