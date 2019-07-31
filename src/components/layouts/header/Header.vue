<template>
  <header>
    <div class="navbar">
      <div class="brand col-xs-12">
        <a href="#">
          <img src="@/assets/images/logo.png" alt="My-EcoIdea logo" class="img-rounded">
          My-EcoIdea v2
        </a>
      </div>
    </div>
    <div class="sub-navbar">
      <div class="row">
        <div class="nav-box home col-xs-3" :to='item.url_link' v-for="item in items" :key="item.id">
          <ul>
            <a :href="item.url_link"><li>
              <img class="svg" :src="require(`@/assets/items/${item.icon_name}_W.svg`)">
              <span>{{item.name}}</span>
            </li></a>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts" src="./header.ts"></script>
<style lang="stylus" src="./header.styl">