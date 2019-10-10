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
        <publication
        type="Eco-Idea"
        description="The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later. Additionally, a 503 Service Unavailable error was encountered while trying to use an ErrorDocument to handle the request."
        likes="129"
        favs='19392'
        author='Quentin sar'
        />
        <publication
        type="Eco-Idea"
        description="En fait voilà parce-que voilà c'est tout"
        likes="129"
        favs='19392'
        author='Quentin sar'
        />
        <publication
        type="Eco-Idea"
        description="En fait voilà parce-que voilà c'est tout"
        likes="129"
        favs='19392'
        author='Quentin sar'
        />
        <publication
        type="Eco-Idea"
        description="En fait voilà parce-que voilà c'est tout"
        likes="129"
        favs='19392'
        author='Quentin sar'
        />
        <publication
        type="Eco-Idea"
        description="En fait voilà parce-que voilà c'est tout"
        likes="129"
        favs='19392'
        author='Quentin sar'
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
      <div id="logo"><img src="@/assets/images/logo.png"/></div>
      <div class="footer"><Footer/></div>
    </div>
    <div id="wave-2"><Wave/></div>
  </div>
</template>
<style lang="stylus" src="./home.styl"></style>
<script src="./home.js"></script>
