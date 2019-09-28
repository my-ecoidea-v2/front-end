<template>
  <body>
    <div class="col-md-3 visible-md visible-lg"></div>
    <div class="col-md-6 col-xs-12 content">
      <div class="account-form">
        <form class="form-login" id="form-login" action="" enctype='application/json'>
          <img src="@/assets/images/logo.png" alt="My-EcoIdea logo" class="img-rounded">
          <h2 class="title">Inscription</h2>
          <p id="error">{{ error }}</p>
          <input v-model="name" id="name" type="text" name="name" placeholder="Nom d'utilisateur"/>
          <input v-model="email" id="email" type="text" name="email" placeholder="Adresse e-mail"/>
          <input v-model="password" id="password" type="password" name="password" placeholder="Mot de passe"/>
          <input v-model="password_confirmation" id="password_confirmation" type="password" name="password_confirmation" placeholder="Mot de passe"/>
          <input v-model="key" id="key" type="text" name="key" placeholder="Code bêta"/>
          <div class="btn btn-lg btn-block" @click='validated'>Inscription</div>
        </form>
      </div>
    </div>
    <div class="col-md-3 visible-md visible-lg"></div>
  </body>
</template>

<script src="./register.js"></script>
<style lang="stylus" src="./register.styl"></style>