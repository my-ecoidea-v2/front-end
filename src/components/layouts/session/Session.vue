<template>
  <div class="session" v-if="!$store.getters.isLogin">
    <div class="title">
      <img src="@/assets/images/logo.png" alt="My-EcoIdea logo" class="img-rounded">
      <p>My-EcoIdea v2</p>
    </div>
    <div class="session-box">
      <ul>
        <li class="col-md-3 hidden-xs"></li>
        <router-link to="account/login"><li class="col-md-3 col-xs-6" ><div id="login">Connexion</div></li></router-link>
        <router-link to="account/register"><li class="col-md-3 col-xs-6" ><div id="register">Inscription</div></li></router-link>
        <li class="col-md-3 hidden-xs"></li>
      </ul>
      <p>Connectez-vous pour avoir accès au contenu</p>
    </div>
  </div>
</template>

<style lang="stylus" src="./session.styl"></style>
<script src="./session.js"></script>

