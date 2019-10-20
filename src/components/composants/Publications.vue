<template>
  <div class="box idea" id="publication" itemscope>
    <div class="title">
      <div id="fav" @click="favoris"><isFav v-if="isFavoris"/><fav v-if="!isFavoris"/></div>
      <p id="type" @click="open">{{ type }}</p>
    </div>
    <div class="box-content" @click="open">
      <p id="description">{{ description }}</p>
    </div>
    <div class="interactions">
      <ul>
        <li class="col-xs-6" id="like" @click="like"><p><isLike v-if="isLiked"/><like v-if="!isLiked"/>{{ likes }}</p></li>
        <li class="col-xs-6" id="author"><p id="author">- {{ author }}</p></li>
      </ul>
    </div>
  </div>
</template>

<script src="./scripts/publication.js"></script>
<style lang="stylus">@import "./stylesheets/publications.styl" 
</style>