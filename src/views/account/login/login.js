import router from '@/router'
import store from '@/store'

export default {
  store: store,
  router: router,
  data: function () {
    return {
      email: "",
      password: "",
      error: "",
    }
  },
  methods: {
    validated: function() {
      fetch('http://127.0.0.1:8000/api/login', {
        method: 'post',
        credentials: "same-origin",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          "cache-control": "no-cache",
        },
        body: JSON.stringify({email: this.email, password: this.password})
      })
      .then(response => {return response.text()})
      .then((data) => {
        $("#email").removeClass("error");
        $("#password").removeClass("error");
        if (Object.keys(JSON.parse(data)) == "error")
        {
          $("#email").addClass("error");
          $("#password").addClass("error");
          this.error = JSON.parse(data)['error']
        }
        if (Object.keys(JSON.parse(data)) == "token")
        {
          $("#email").addClass("valid");
          $("#password").addClass("valid");
          document.cookie = "token="+JSON.parse(data)['token'];
          router.push('/');
          store.commit('setLogin');
        }
      });
    }
  }
}