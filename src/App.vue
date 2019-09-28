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
    height 0

  @media screen and (max-width: 768px)
    .spacer-header
      height ( navbar-height)

</style>
