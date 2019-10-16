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
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      key: '',
      error: ''
    }
  },
  methods: {
    validated: function () {
      if (this.name == '')
      {
        $('#name').addClass('error')
        this.error = 'Nom de compte vide'
        return;
      } else { $('#name').removeClass('error') }
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
      if (this.password_confirmation == '')
      {
        $('#password_confirmation').addClass('error')
        this.error = 'Mot de passe vide'
        return;
      } else { $('#password_confirmation').removeClass('error') }
      fetch('http://api.my-ecoidea.org/api/user/register', {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'cache-control': 'no-cache'
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          key: this.code,
        })
      })
      .then(response => { return response.text() })
      .then((data) => {
        $('#name').removeClass('error')
        $('#email').removeClass('error')
        $('#password').removeClass('error')
        $('#password_confirmation').removeClass('error')
        $('#key').removeClass('error')
        if (Object.keys(JSON.parse(data)).includes('error')) {
          this.error = JSON.parse(data)['error']
          $('#' + JSON.parse(data)['field']).addClass('error')
        } else if (Object.keys(JSON.parse(data)).includes('token')) {
          localStorage.token = JSON.parse(data)['token']
          store.commit('setLogin')
          router.push({path: '/mon-compte/inscription'})
        }
      })
    }
  }
}
