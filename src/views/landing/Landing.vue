<template>
  <div class="session">
    <div class="col-sm-6 col-xs-12 infos">
      <div class="icon">
        <img src="@/assets/images/logo.png" alt="My-EcoIdea logo" class="img-rounded">
      </div>
      <div class="title">
        <h1>My-EcoIdea vous invite !</h1>
        <p>Venez rejoindre nos utilisateurs !
  Publiez, Likez et contribuez à notre communauté éco-responsable.
        </p>
      </div>
    </div>
    <div class="col-sm-6 hidden-xs demonstrate">
      <img id="publication" src="@/assets/images/exemple.png">
    </div>
    <div class="session-box">
        <ul>
          <li class="col-sm-3 hidden-xs"></li>
          <router-link to="/mon-compte/connexion"><li class="col-sm-3 col-xs-6" ><div id="login">Connexion</div></li></router-link>
          <router-link to="/mon-compte/inscription"><li class="col-sm-3 col-xs-6" ><div id="register">Inscription</div></li></router-link>
          <li class="col-sm-3 hidden-xs"></li>
        </ul>
        <p class="hidden-xs hidden-sm">Connectez-vous pour avoir accès au contenu</p>
      </div>
    <div id="wave-1" style="opacity: 1;"><Wave/></div>
    <div class="footer"><Footer/></div>
  </div>
</template>

<style lang="stylus" src="./landing.styl"></style>
<script src="./landing.js"></script>
