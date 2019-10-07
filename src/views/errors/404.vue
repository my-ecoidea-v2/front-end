<template>
  <div class="error404">
    <div class="col-md-3"></div>
    <div class="middle col-md-6">
      <div class="content">
        <img alt="Project logo" src="@/assets/images/logo.png">
        <h1>Oups, cette page n'existe pas</h1>
        <p>Veuillez nous excuser, une erreur est survenue. Type : erreur 404, redirigez-vous vers <router-link to='/'>accueil du site</router-link></p>
      </div>
    </div>
    <div class="col-md-3"></div>
  </div>
</template>

<style lang="stylus">
.error404
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
