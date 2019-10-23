<template>
  <div class="success_publications">
    <div class="col-xs-2"></div>
    <div class="middle col-sm-8 col-xs-12 content">
      <checkg />
      <h1>Terminé !</h1>
      <h2>Votre publication à été soumise à examen, elle sera publié d'ici les prohains jours !</h2>
      <p><router-link to='/'>Aller vers l'accueil du site</router-link></p>
    </div>
  </div>
</template>

<style lang="stylus">
.success_publications
  z-index 100
  position fixed
  top 0
  left 0
  width 100%
  height 100vh
  background-color: #fefefe
  text-align center
  .content
    padding-left 25px
    padding-right 25px
    svg
      height 150px
      display inline-block
    h1
      font-size 3em
      text-align center
      color #85C174
      font-weight bold
    h2
      color #353535
      font-size 1.75em
    p
      margin-top 25px
</style>

<script>
import checkg from '@/assets/items/check_g.svg'

export default {
  components: {
    checkg
  }
}
</script>