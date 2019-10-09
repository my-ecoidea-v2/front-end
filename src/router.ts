import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'error',
      component: () => import('@/views/errors/404.vue')
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: () => import('@/views/errors/Maintenance.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/mon-compte',
    //   name: 'account',
    //   component: () => import('@/views/account/Account.vue')
    // },
    // {
    //   path: '/mon-compte/connexion',
    //   name: 'login',
    //   component: () => import('@/views/account/login/Login.vue')
    // },
    // {
    //   path: '/mon-compte/inscription',
    //   name: 'register',
    //   component: () => import('@/views/account/register/Register.vue')
    // },
    // {
    //   path: '/publications/creer',
    //   name: 'publications-create',
    //   component: () => import('@/views/publications/create/Create.vue')
    // },
    {
      path: '/bienvenue',
      name: 'landing',
      component: () => import('@/views/landing/Landing.vue')
    }
  ]
})
