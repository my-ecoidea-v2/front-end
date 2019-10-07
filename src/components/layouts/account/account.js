import store from '@/store'

export default {
  store: store,
  data: function () {
    return {
      user_email: localStorage.user_email,
      user_name: localStorage.user_name
    }
  },
  methods: {
    logout: function () {
      fetch('http://api.my-ecoidea.org/api/user/logout', {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
          'Authorization': 'Bearer ' + localStorage.user_token
        }
      })
      localStorage.clear()
      store.commit('logout')
    }
  }
}
