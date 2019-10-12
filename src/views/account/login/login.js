import router from '@/router'
import store from '@/store'
import Wave from '@/assets/elem/wave.svg'
import Footer from '@/components/layouts/footer/Footer.vue'

export default {
  store: store,
  router: router,
  components: {
    Wave,
    Footer
  },
  data: function () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    validated: function () {
      fetch('http://account.api.my-ecoidea.org/api/login', {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'cache-control': 'no-cache'
        },
        body: JSON.stringify({ email: this.email, password: this.password })
      })
        .then(response => { return response.text() })
        .then((data) => {
          $('#email').removeClass('error')
          $('#password').removeClass('error')
          if (Object.keys(JSON.parse(data)).includes('error')) {
            $('#email').addClass('error')
            $('#password').addClass('error')
            this.error = JSON.parse(data)['error']
          }
          if (Object.keys(JSON.parse(data)).includes('token')) {
            $('#email').addClass('valid')
            $('#password').addClass('valid')
            localStorage.user_token = JSON.parse(data)['token']
            router.push('/')
            store.commit('setLogin')
            fetch('http://account.api.my-ecoidea.org/api/user', {
              method: 'get',
              credentials: 'same-origin',
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'cache-control': 'no-cache',
                'Authorization': 'Bearer ' + localStorage.user_token
              }
            })
              .then(response => { return response.text() })
              .then((data) => {
                localStorage.user_email = JSON.parse(data)['user']['email']
                localStorage.user_name = JSON.parse(data)['user']['name']
              })
          }
        })
    }
  }
}
