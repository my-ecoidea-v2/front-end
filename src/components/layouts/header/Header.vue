<template>
  <header>
    <div class="menu row col-sm-3 row">
      <ul>
        <router-link to="/" class="hidden-xs"><img alt='My-EcoIdea logo' src="@/assets/images/logo.png"></router-link>
        <router-link to="/" class="col-xs-2 col-sm-12">
          <li><iconHome></iconHome></li>
        </router-link>
        <router-link to="/publications/search" class="col-xs-2 col-sm-12">
          <li><iconSearch></iconSearch></li>
        </router-link>
        <router-link id="center" to="/publications/create" class="col-xs-4 col-sm-12">
          <li><iconPublications></iconPublications></li>
        </router-link>
        <router-link to="/account/follow" class="col-xs-2 col-sm-12">
          <li><iconFollow></iconFollow></li>
        </router-link>
        <router-link to="/account" class="col-xs-2 hidden-sm hidden-md hidden-lg">
          <li><iconAccount></iconAccount></li>
        </router-link>
      </ul>
    </div>
  </header>
</template>
<script lang="ts" src="./header.js"></script>
<style lang="stylus" src="./header.styl">