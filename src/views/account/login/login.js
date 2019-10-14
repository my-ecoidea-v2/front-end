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
      if (this.email == '')
      {
        $('#email').addClass('error')
        this.error = 'Email vide'
        return;
      } else { $('#email').removeClass('error') }
      if (this.password == '')
      {
        $('#password').addClass('error')
        this.error = 'Mot de passe vide'
        return;
      } else { $('#password').removeClass('error') }
      fetch('http://api.my-ecoidea.org/api/user/login', {
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
          if (Object.keys(JSON.parse(data)).includes('error')) {
            if (JSON.parse(data)['error'] == 'invalid_key')
            {
              this.error = 'Clés bêta non valide !'
            }
            if (JSON.parse(data)['error'] == 'invalid_email_or_password')
            {
              this.error = 'Utilisateur ou mot de passe invalide'
              $('#email').addClass('error');
              $('#password').addClass('error');
            } else {
              $('#email').removeClass('error');
              $('#password').removeClass('error');
            }
          } else {
            localStorage.token = JSON.parse(data)['token']
            store.commit('setLogin')
            router.push({path: '/'})
          }
        })
    }
  }
}
