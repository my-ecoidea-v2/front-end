<template>
  <div id="app">
  <Header></Header>
  <div class="spacer-header"></div>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/layouts/header/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>

<style lang="stylus">
  @import "./components/layouts/header/header.styl"

  .spacer-header
    position relative
    height ( navbar-height + sub-navbar-height)

  @media screen and (max-width: 992px)
    .spacer-header
      height ( navbar-height-mobile + sub-navbar-height-mobile)

</style>
