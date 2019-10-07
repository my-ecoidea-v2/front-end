<template>
  <header>
    <div class="menu row col-sm-1 row">
      <ul>
        <li id="logo">
          <router-link to="/" class="hidden-xs">
            <img alt='My-EcoIdea logo' src="@/assets/images/logo_w.png">
            </router-link>
        </li>
        <li class="separate"></li>
        <router-link to='/'><li>
          <iconHome></iconHome>
        </li></router-link>
        <router-link id="center" to="/publications/create"><li>
          <iconPublications></iconPublications>
        </li></router-link>
        <router-link to="/u/favoris"><li>
          <iconFollow></iconFollow>
        </li></router-link>
        <router-link to="/account"><li>
          <iconAccount></iconAccount>
        </li></router-link>
      </ul>
    </div>
  </header>
</template>
<script lang="ts" src="./header.js"></script>
<style lang="stylus" src="./header.styl">
