<template>
  <div id="meFavoris">
    <div class="col-sm-1 content hidden-xs">
    </div>
    <div class="col-sm-10">
      <div class="title">
        <p id="title">Mes favoris</p>
      </div>
      <div class="content">
        <publication v-for="publication in publications" v-bind:key="publication.id"
        :type="publication.type"
        :description="publication.content.description"
        :likes="publication.content.likes"
        :author='publication.user.name'
        :token='publication.token'
        />
      </div>
    </div>
  </div>
</template>
<style lang="stylus" src="./meFavoris.styl"></style>
<script src="./meFavoris.js"></script>
