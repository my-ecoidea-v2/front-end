<template>
  <div>
  <div class="col-md-2 content">
      </div>
      <div class="col-md-5 content">
        <div class="page-title">
          <h1>Rechercher</h1>
        </div>
        <div class="box search">
          <input id="search-input" name="search-txt" type="text" placeholder="Rechercher">
          <div id="search-btn"><iconSearch/></div>
        </div>
        <div class="box selection" itemscope >
          <div class="box-user">
            <img class="picture" alt="My-EcoIdea logo" src="@/assets/images/logo.png">
            <h2 class="username">Eco Idée du mois</h2>
          </div>
          <p class="description">Mon idée est d'améliorer notre éco-quotidien en étant inscrit sur le réseau social my ecoidea</p>
          <div class="box-actions row">
            <div class="like action col-xs-4">
              <iconLike></iconLike>
              <p>192</p>
            </div>
            <div class="action col-xs-4"></div>
            <div @click='discover("idea_exemple")' class="discover action col-xs-4">
              <iconLink class="svg"></iconLink>
            </div>
          </div>
        </div>
        <div class="box selection" itemscope >
          <div class="box-user">
            <img class="picture" alt="My-EcoIdea logo" src="@/assets/images/logo.png">
            <h2 class="username">Eco Idée du mois</h2>
          </div>
          <p class="description">Mon idée est d'améliorer notre éco-quotidien en étant inscrit sur le réseau social my ecoidea</p>
          <div class="box-actions row">
            <div class="like action col-xs-4">
              <iconLike></iconLike>
              <p>192</p>
            </div>
            <div class="action col-xs-4"></div>
            <div @click='discover("idea_exemple")' class="discover action col-xs-4">
              <iconLink class="svg"></iconLink>
            </div>
          </div>
        </div>
        <div class="box slogan" itemscope >
          <div class="box-user">
            <img class="picture" alt="User picture" src="https://pbs.twimg.com/profile_images/1150517248668446721/s4I_f4i2_400x400.jpg">
            <p class="username">Quentin Sar</p>
          </div>
          <p class="type">Eco-Slogan </p>
          <p class="text">My-EcoIdea est le best site réseau social pour l'écologie, mais j'aimerais une phrase plus longue</p>
          <div class="box-actions row">
            <div class="like action col-xs-4">
              <iconLike></iconLike>
              <p>192</p>
            </div>
            <div class="action col-xs-4"></div>
            <div class="action col-xs-4"></div>
          </div>
        </div> 
        <div class="box idea" itemscope >
          <div class="box-user">
            <img class="picture" alt="User picture" src="https://pbs.twimg.com/profile_images/1150517248668446721/s4I_f4i2_400x400.jpg">
            <p class="username">Quentin Sar</p>
          </div>
          <p class="keyword">Ecologie</p>
          <p class="keyword">My-EcoIdea</p>
          <p class="keyword">Quotidien</p>
          <p class="description">Mon idée est d'améliorer notre éco-quotidien en étant inscrit sur le réseau social my ecoidea</p>
          <div class="box-actions row">
            <div class="like action col-xs-4">
              <iconLike></iconLike>
              <p>192</p>
            </div>
            <div class="follow action col-xs-4">
              <iconFollow></iconFollow>
              <p>192</p>
            </div>
            <div @click='discover("idea_exemple")' class="discover action col-xs-4" >
              <iconLink class="svg"></iconLink>
            </div>
          </div>
        </div>    
      </div>
      <div class="col-md-3 content">
        <Account></Account>
      </div>
  </div>
</template>
<style lang="stylus" src="./search.styl"></style>
<script src="./search.js"></script>