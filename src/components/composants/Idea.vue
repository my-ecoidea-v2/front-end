<template>
  <div id="idea">
    <div class="col-sm-1 content hidden-xs">
    </div>
    <div class="col-sm-10">
      <div id="title">Description de l'idée</div>
      <div class="content" style="margin-top: 25px !important">
        <div class="box idea">
          <div class="title">
            <div id="fav"><fav/></div>
            <p id="type">Résumé</p>
          </div>
          <div class="resume">
            <p id="resume">" {{resume}} "</p>
          </div>
          <div class="keywords row">
            <ul>
              <li v-for="keyword in keywords" v-bind:key="keyword.id" class="col-xs-4 link"><p>{{keyword}}</p></li>
            </ul>
          </div>
          <div class="title">
            <p id="type">Description</p>
          </div>
          <div class="description">
            <p id="description">{{ description }}</p>
          </div>
          <div class="links row">
            <ul>
              <li v-for="link in links" v-bind:key="link.id" class="col-xs-4 link">
                <a :href="link" target="_blank"><p>Lien » {{link}}</p></a>
              </li>
            </ul>
          </div>
          <div class="box-content row">
            <ul>
              <li class="col-xs-6" id="like"><p><like/>{{ likes }}</p></li>
              <li class="col-xs-6" id="author"><p id="author">- {{ author }}</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer"><Footer/></div>
    </div>
    <div id="wave-2"><Wave/></div>
  </div>
</template>
<style lang="stylus" src="./stylesheets/idea.styl"></style>
<script src="./scripts/idea.js"></script>
