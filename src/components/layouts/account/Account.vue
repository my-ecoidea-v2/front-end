<template>
  <div v-if="$store.getters.isLogin" class='account hidden-xs'>
    <div class="account-menu">
      <ul>
        <li>
    <div class="account-user">
      <img class="picture" alt="User picture" src="@/assets/images/logo.png"><p id="name">{{ user_name }}</p><p id="title">Mon profil</p></div></li>
        <li class="items">Mes publications</li>
        <li class="items">Mes Adhésions</li>
      </ul>
    </div>
    <div class="account-logout" @click='logout'>déconnexion</div>
  </div>
</template>

<style lang="stylus" src="./account.styl"></style>
<script src='./account.js'></script>
