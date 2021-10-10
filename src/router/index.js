import Vue from 'vue'
import VueRouter from 'vue-router'
import NetworkStats from '../views/NetworkStats.vue'
import Supply from '../views/Supply.vue'
import Users from '../views/Users.vue'
import Liquidity from '../views/Liquidity.vue'
import Misc from '../views/Misc.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: 'NetworkStats'
  },
  {
    path: '/NetworkStats',
    name: 'NetworkStats',
    component: NetworkStats
  },
  {
    path: '/Supply',
    name: 'Supply',
    component: Supply
  },
  {
    path: '/Users',
    name: 'Users',
    component: Users
  },
  {
    path: '/Liquidity',
    name: 'Liquidity',
    component: Liquidity
  },
  {
    path: '/Misc',
    name: 'Misc',
    component: Misc
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
