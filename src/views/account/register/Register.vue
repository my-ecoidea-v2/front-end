<template>
  <div id="inscription">
        <!--  <form class="form-login" id="form-login" action="" enctype='application/json'>
           <img src="@/assets/images/logo.png" alt="My-EcoIdea logo" class="img-rounded">
           <h2 class="title">Inscription</h2>
           <p id="error">{{ error }}</p>
           <input v-model="name" id="name" type="text" name="name" placeholder="Nom d'utilisateur"/>
           <input v-model="email" id="email" type="text" name="email" placeholder="Adresse e-mail"/>
           <input v-model="password" id="password" type="password" name="password" placeholder="Mot de passe"/>
           <input v-model="password_confirmation" id="password_confirmation" type="password" name="password_confirmation" placeholder="Mot de passe"/>
           <input v-model="key" id="key" type="text" name="key" placeholder="Code bêta"/>
           <div class="btn btn-lg btn-block" @click='validated'>Inscription</div>
         </form> -->
    <div class="col-xs-2 hidden-lg hidden-sm hidden-md"></div>
    <div class="col-sm-6 hidden-xs infos">
      <div class="icon">
        <img src="@/assets/images/logo.png" alt="My-EcoIdea logo" class="img-rounded">
      </div>
      <div class="inscription-title">
        <p id="inscription-title">Inscription</p>
      </div>
    </div>
    <div class="col-sm-4 col-xs-12 login">
      <div class="hidden-lg hidden-sm hidden-md infos-mobile">
        <div class="inscription-title">
          <p id="inscription-title">Inscription</p>
        </div>
      </div>
      <div class="form">
        <form class="form-login" id="form-login" action="" enctype='application/json'>
          <p id="error">{{ error }}</p>
          <label>Nom de mon compte :
          <input v-model="name" id="name" type="text" name="name" placeholder="ex : My-EcoIdea"/></label>
          <label>Mon adresse mail :
          <input v-model="email" id="email" type="text" name="email" placeholder="ex : exemple@my-ecoidea.org"/></label>
          <label>Mon mot de passe :
          <input v-model="password" id="password" type="password" name="password" placeholder="ex : monmdp"/></label>
          <label>Confirmer mon mot de passe
          <input v-model="password_confirmation" id="password_confirmation" type="password" name="password_confirmation" placeholder="ex : monmdp"/></label>
          <label>Code bêta (optionnel)
          <input v-model="code" id="code" type="code" name="code" placeholder="ex : MYE-000-COD"/></label>
          <div id="question">
            <router-link to='/mon-compte/connexion'>Déjà un compte ?</router-link>
          </div>
          <div class="btn btn-lg btn-block validated" @click='validated'>S'inscrire</div>
          </form>
      </div>
    </div>
    <div id="wave-1" style="opacity: 1;"><Wave/></div>
    <div class="footer"><Footer/></div>
  </div>
</template>

<script src="./register.js"></script>
<style lang="stylus" src="./register.styl"></style>
