import router from '@/router'

export default {
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      key: "",
      error: ""
    }
  },
  methods: {
    validated: function() {
      if (this.key == null || this.key == "") {
        fetch('http://api.my-ecoidea.org/api/user/register', {
          method: 'post',
          credentials: "same-origin",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            "cache-control": "no-cache",
          },
          body: JSON.stringify({
            name: this.name, 
            email: this.email, 
            password: this.password,
            password_confirmation: this.password_confirmation,
          })
        })
        .then(response => {return response.text()})
        .then((data) => {
          $("#name").removeClass("error");
          $("#email").removeClass("error");
          $("#password").removeClass("error");
          $("#password_confirmation").removeClass("error");
          $("#key").removeClass("error");
          if (Object.keys(JSON.parse(data)).includes("error"))
          {
            this.error = JSON.parse(data)['error'];
            $("#"+JSON.parse(data)['field']).addClass("error");
          } else if (Object.keys(JSON.parse(data)).includes("token"))
          {
            $("#name").addClass("valid");
            $("#email").addClass("valid");
            $("#password").addClass("valid");
            $("#password_confirmation").addClass("valid");
            document.cookie = "token="+JSON.parse(data)['token']
          }
        }); 
      }
    }
  }
}