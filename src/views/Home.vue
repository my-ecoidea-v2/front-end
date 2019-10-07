<template>
  <div>
    <Cookies/>
      <div class="col-sm-1 content">
      </div>
      <div class="col-sm-6">
        <div class="search">
          <input id="search-input" name="search-txt" type="text" placeholder="Rechercher">
          <div id="search-btn"><iconSearch/></div>
        </div>
        <div class="content">
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
            <div class="box-idea-details idea_exemple">
              <p class="title">Détails de l'idée</p>
              <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quisquam voluptatem itaque facilis doloremque officia perferendis cumque in molestiae quo nihil odit placeat quaerat, accusantium necessitatibus dicta blanditiis laborum ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quidem ipsa nihil, pariatur eligendi, fugiat magni dolor exercitationem iure, nemo sed tempora. Adipisci dignissimos quos commodi repellendus tenetur numquam repellat.
              </div>
              <div class="links">
                <p itemprop="url">source wikipéda<iconLink></iconLink></p>
                <p itemprop="url">sarquentin.fr<iconLink></iconLink></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3 content">
        <Account></Account>
      </div>
  </div>
</template>
<style lang="stylus" src="./home.styl"></style>
<script src="./home.js"></script>
