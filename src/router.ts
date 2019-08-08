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
    {
      path: '/account/login',
      name: 'login',
      component: () => import('@/views/account/login/Login.vue')
    },
    {
      path: '/account/register',
      name: 'register',
      component: () => import('@/views/account/register/Register.vue')
    },
    {
      path: '/publications/create',
      name: 'publications-create',
      component: () => import('@/views/publications/create/Create.vue')
    },
    {
      path: '/publications/search',
      name: 'publications-search',
      component: () => import('@/views/publications/search/Search.vue')
    }
  ]
})
