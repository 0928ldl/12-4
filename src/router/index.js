import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path: '/home/about',
        name: 'about',
        component: () => import('../views/About.vue')
      },
      {
        path: '/home/my',
        name: 'my',
        component: () => import('../views/My.vue')
      },
      {
        path: '/home/main',
        name: 'main',
        component: () => import('../views/Main.vue')
      },
      {
        path:"/home",
        redirect:"/home/main"
      },
    ]
  },
  {
    path:"/",
    redirect:"/home"
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
