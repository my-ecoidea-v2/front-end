<template>
  <div id="connexion">
    <div class="col-xs-2 hidden-lg hidden-sm hidden-md"></div>
    <div class="col-sm-6 hidden-xs infos">
      <div class="icon">
        <img src="@/assets/images/logo.png" alt="My-EcoIdea logo" class="img-rounded">
      </div>
      <div class="connexion-title">
        <p id="connexion-title">Connexion</p>
      </div>
    </div>
    <div class="col-sm-4 col-xs-12 login">
      <div class="hidden-lg hidden-sm hidden-md infos-mobile">
        <div class="icon">
          <img src="@/assets/images/logo.png" alt="My-EcoIdea logo" class="img-rounded">
        </div>
        <div class="connexion-title">
          <p id="connexion-title">Connexion</p>
        </div>
      </div>
      <div class="form">
        <form class="form-login" id="form-login" action="" enctype='application/json'>
          <p id="error">{{ error }}</p>
          <label>Adresse mail
          <input v-on:keyup.enter="validated" v-model="email" id="email" type="text" name="email" placeholder="ex : exemple@my-ecoidea.org"/></label>
          <label>Mot de passe
          <input v-on:keyup.enter="validated" v-model="password" id="password" type="password" name="password" placeholder="ex : monmdp"/></label>
          <div id="question">
            <router-link to='/mon-compte/inscription'>Pas encore de compte ?</router-link>
          </div>
          <div class="btn btn-lg btn-block validated" @click='validated'>Se connecter</div>
          </form>
      </div>
    </div>
    <div id="wave-1" style="opacity: 1;"><Wave/></div>
    <div class="footer"><Footer/></div>
  </div>
</template>

<script src="./login.js"></script>
<style lang="stylus" src="./login.styl"></style>
