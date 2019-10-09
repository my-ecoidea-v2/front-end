<template>
  <div class="box idea" id="publication" itemscope >
    <div class="title">
      <div id="fav"><fav/></div>
      <p id="type">{{ type }}</p>
    </div>
    <div class="box-content">
      <p id="description">{{ description }}</p>
      <div class="interactions">
        <ul>
          <li class="col-sm-6" id="like"><p><like/>{{ likes }}</p></li>
          <li class="col-sm-6" id="author"><p id="author">- {{ author }}</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./scripts/publication.js"></script>
<style lang="stylus">@import "./stylesheets/publications.styl" 
</style>