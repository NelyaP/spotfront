import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/producers',
    component: () => import('../views/Producers.vue') 
  },
  {
    path: '/producers/:id',
    component: () => import('../views/Producer.vue') 
  },
  {
    path: '/products/:id',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/orders',
    component: () => import('../views/Orders.vue') 
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router