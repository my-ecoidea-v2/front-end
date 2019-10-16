<template>
  <div>
    <Cookies/>
    <div class="col-sm-1 content hidden-xs">
    </div>
    <div class="col-sm-6">
      <div class="search">
        <input id="search-input" name="search-txt" type="text" placeholder="Rechercher une publication...">
        <div id="search-btn"><iconSearch/></div>
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
    <div class="col-sm-5 stats">
      <!-- <div class="items">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="stats-content">
        <p class="numbers">47
          <span>publications</span></p><p class="numbers">1273
            <span>utilisateurs</span></p>
      </div> -->
      <div id="logo"><img alt="My-EcoIdea Logo opacité réduite" src="@/assets/images/logo.png"/></div>
      <div class="footer"><Footer/></div>
    </div>
    <div id="wave-2"><Wave/></div>
  </div>
</template>
<style lang="stylus" src="./home.styl"></style>
<script src="./home.js"></script>