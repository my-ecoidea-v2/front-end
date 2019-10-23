<template>
  <div class="success_publications">
    <div class="col-xs-2"></div>
    <div class="middle col-sm-8 col-xs-12 content">
      <thesvg />
      <h1>Maintenance en cours !</h1>
      <h2>Le site My-EcoIdea ré-ouvrira ses portes sous peu</h2>
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
      animation rotate 3s infinite
    h1
      font-size 3em
      text-align center
      color #dd6161
      font-weight bold
    h2
      color #353535
      font-size 1.75em
      font-weight bold
    p
      margin-top 25px

@keyframes rotate {
  from {
    transform rotate(0deg)
  }
  to {
    transform rotate(360deg)
  }
}
</style>

<script>
import thesvg from '@/assets/items/gear_r.svg'

export default {
  components: {
    thesvg
  }
}
</script>