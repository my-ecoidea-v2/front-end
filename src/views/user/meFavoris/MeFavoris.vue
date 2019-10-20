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
        :type="publication.idea.type"
        :description="publication.idea.content.description"
        :likes="publication.idea.content.likes"
        :token='publication.idea.token'
        />
      </div>
    </div>
  </div>
</template>
<style lang="stylus" src="./meFavoris.styl"></style>
<script src="./meFavoris.js"></script>
