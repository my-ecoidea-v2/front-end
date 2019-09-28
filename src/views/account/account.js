import store from '@/store'
import router from '@/router'

export default {
  data: function(){
    return {
      user_name: localStorage.user_name,
      user_email: localStorage.user_email,
    }
  },
  methods: {
    logout: function() {
      fetch('http://account.api.my-ecoidea.org/api/logout', {
        method: 'post',
        credentials: "same-origin",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          "cache-control": "no-cache",
          'Authorization': 'Bearer '+localStorage.user_token, 
        },
      });
      localStorage.clear();
      router.push('/');
      store.commit('logout')
    }
  }
}