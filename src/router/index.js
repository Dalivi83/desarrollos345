import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Servicios',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/news',
    name: 'Noticias',
    component: () => import('../views/News.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team.vue')
  },
  {

    path: '/nuevoUsuario',
    name: 'nuevoUsuario',
    component: () => import('../views/nuevoUsuario.vue')
  },
  {
    path: '/Form',
    name: 'Form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/newsone',
    name: 'Noticias',
    component: () => import('../components/News/NewsOne.vue')
  },
  {
    path: '/newstwo',
    name: 'Noticias',
    component: () => import('../components/News/NewsTwo.vue')
  },
  {
    path: '/newsthree',
    name: 'Noticias',
    component: () => import('../components/News/NewsThree.vue')
  },
  {
    path: '/newsfour',
    name: 'Noticias',
    component: () => import('../components/News/NewsFour.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
