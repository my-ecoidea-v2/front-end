<template>
  <body>
    <div class="col-md-3 visible-md visible-lg"></div>
    <div class="col-md-6 col-xs-12 content">
      <div class="account-form">
        <form class="form-login" id="form-login" action="" enctype='application/json'>
          <img src="@/assets/images/logo.png" alt="My-EcoIdea logo" class="img-rounded">
          <h2 class="title">Connexion</h2>
          <p id="error">{{ error }}</p>
          <input v-model="email" id="email" type="text" name="email" placeholder="Adresse e-mail"/>
          <input v-model="password" id="password" type="password" name="password" placeholder="Mot de passe"/>
          <div class="btn btn-lg btn-block" @click='validated'>Connexion</div>
        </form>
      </div>
    </div>
    <div class="col-md-3 visible-md visible-lg"></div>
  </body>
</template>

<script src="./login.js"></script>
<style lang="stylus" src="./login.styl"></style>
