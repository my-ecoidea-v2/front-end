<template>
  <body>
    <div class="col-md-3 visible-md visible-lg"></div>
    <div class="col-md-6 col-xs-12 content">
      <div class="account-form">
        <form class="form-login" id="form-login" action="" enctype='application/json'>
          <h2 class="form-login-heading">Connexion</h2>
          <input class="form-control" id="email" type="text" required name="email" placeholder="Email address" />
          <input class="form-control" id="password" type="password" required name="password" placeholder="Password" />
          <input class="btn btn-lg btn-primary btn-block" id="submit" type="submit" />
        </form>
      </div>
    </div>
    <div class="col-md-3 visible-md visible-lg"></div>
  </body>
</template>

<script>
$(document).ready(function(){
    fetch('http://127.0.0.1:8000/api/login', {
      mode: 'no-cors',
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        "cache-control": "no-cache",
      },
      body: JSON.stringify({email: "sarquentin@gmail.com", password:  "mdpmdp"})
    })
.then(response => {
  return response.text()
})
.then((data) => {
  console.log(resolve(data ? JSON.parse(data) : {}))
})
.catch((error) => {
})
});
</script>
<style lang="stylus" src="./login.styl"></style>