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
    name: 'Equipo',
    component: () => import('../views/Team.vue')
  },
  {
    path: '/nuevoUsuario',
    name: 'nuevoUsuario',
    component: () => import('../views/nuevoUsuario.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
