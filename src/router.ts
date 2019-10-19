import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: () => import('@/views/legal/MentionsLegales.vue'),
      meta: { unAuth: true }
    },
    {
      path: '/CGU',
      name: 'CGU',
      component: () => import('@/views/legal/CGU.vue'),
      meta: { unAuth: true }
    },
    {
      path: '/equipe',
      name: 'equipe',
      component: () => import('@/views/legal/Equipe.vue'),
      meta: { unAuth: true }
    },
    {
      path: '/concept',
      name: 'concept',
      component: () => import('@/views/legal/Concept.vue'),
      meta: { unAuth: true }
    },
    {
      path: '*',
      name: 'error',
      component: () => import('@/views/errors/404.vue'),
      meta: { unAuth: true }
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: () => import('@/views/errors/Maintenance.vue'),
      meta: { unAuth: true }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { yesAuth: true }
    },
    {
      path: '/mon-compte',
      name: 'account',
      component: () => import('@/views/account/Account.vue'),
      meta: { yesAuth: true }
    },
    {
      path: '/mon-compte/connexion',
      name: 'login',
      component: () => import('@/views/account/login/Login.vue'),
      meta: { noAuth: true }
    },
    {
      path: '/mon-compte/inscription',
      name: 'register',
      component: () => import('@/views/account/register/Register.vue'),
      meta: { noAuth: true }
    },
    {
      path: '/mon-compte/favoris',
      name: 'favoris',
      component: () => import('@/views/user/meFavoris/MeFavoris.vue'),
      meta: { yesAuth: true }
    },
    {
      path: '/publications/creer',
      name: 'publications-create',
      component: () => import('@/views/publications/create/Create.vue'),
      meta: { yesAuth: true }
    },
    { 
      path: '/publications/token=:token', 
      component: () => import('@/components/composants/Idea.vue'),
      props: true,
      meta: { yesAuth: true }
    },
    {
      path: '/bienvenue',
      name: 'landing',
      component: () => import('@/views/landing/Landing.vue'),
      meta: { noAuth: true }
    },
    {
    path: '/publications/success',
    name: 'publications_send',
    component: () => import('@/views/success/Publication_create.vue'),
    meta: { yesAuth: true }
  },
  ]
})

export default router;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.noAuth)) {
    if (localStorage.token != null) {
      fetch('http://api.my-ecoidea.org/api/user/get', {
        method: 'get',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
          'Authorization': 'Bearer ' + localStorage.token
        }
      })
      .then(response => { return response.text() })
      .then((data) => {
        if (Object.keys(JSON.parse(data)).includes('status')) {
          next()
        } else 
        {
          next({
            path: '/',
            query: { redirect: to.fullPath }
          })
        }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.yesAuth)) {
    if (localStorage.token != null) {
      fetch('http://api.my-ecoidea.org/api/user/get', {
        method: 'get',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
          'Authorization': 'Bearer ' + localStorage.token
        }
      })
      .then(response => { return response.text() })
      .then((data) => {
        if (Object.keys(JSON.parse(data)).includes('status')) {
          next({
            path: '/bienvenue',
            query: { redirect: to.fullPath }
          })
        } else 
        {
          next()
        }
      })
    } else {
      next({
        path: '/bienvenue',
        query: { redirect: to.fullPath }
      })
    }
  } else if (to.matched.some(record => record.meta.unAuth)) {
    next();
  }
})