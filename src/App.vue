<template>
  <div id="app">
    <Header></Header>
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