import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: function () {
    this.isLogin();
  },
  methods: {
    isLogin: function () {
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
              localStorage.clear()
              store.commit('logout')
            } else 
            {
              store.commit('setLogin')
            }
          })
      }
    }
  }
}).$mount('#app')