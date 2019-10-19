<template>
  <div class="success_publications">
    <div class="col-md-3"></div>
    <div class="middle col-md-11">
      <div class="content">
        <img alt="Project logo" src="@/assets/images/logo.png">
        <div class="title">
          <p id="title">Votre publication à été envoyé !</p>
        </div>
        <p>Notre équipe de modération va examiner votre publication et la publier d'ici 1 jour, <router-link to='/'>retour vers l'accueil du site</router-link></p>
      </div>
    </div>
    <div class="col-md-3"></div>
  </div>
</template>

<style lang="stylus">
.success_publications
  text-align center
  .content
    margin-top 50px
    text-align center
    box-shadow 0 0 5px 2px #eeeeee
    padding 25px
    border-radius 15px
    img
      height 200px
      display inline-block
    h1
      font-size 2em
      text-align center
    p
      margin-top 25px
</style>
