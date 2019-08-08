<template>
  <div>
    <Session></Session>
      <div class="col-md-3 content">
      </div>
      <div class="col-md-6 content">
        <div class="page-title">
          <h1>Fil d'actualité</h1>
        </div>
        <div class="box selection">
          <p id="type">Eco Idée du mois<img alt="My-EcoIdea logo" src="@/assets/images/logo.png"></p>
          <p id="description">Mon idée est d'améliorer notre éco-quotidien en étant inscrit sur le réseau social my ecoidea</p>
          <div class="box-actions row">
            <div id="like" class="action col-md-6">
              <img src="@/assets/items/Hearth_W.svg">
              <p>192</p>
            </div>
            <div id="discover" class="action col-md-6">
              <iconLink class="svg"></iconLink>
              <p @click='discover("idea_exemple")'>Découvrir</p>
            </div>
          </div>
        </div>
        <div class="box selection">
          <p id="type">Eco Idée de la semaine<img alt="My-EcoIdea logo" src="@/assets/images/logo.png"></p>
          <p id="description">Mon idée est d'améliorer notre éco-quotidien en étant inscrit sur le réseau social my ecoidea</p>
          <div class="box-actions">
            <div id="like" class="ic medium fl col-md-3"  data-no-user="1" >
              <img src="@/assets/items/Hearth_W.svg">
              <p>192</p>
              <div id="discover" @click='discover("idea_exemple")'>Découvrir</div>
            </div>
          </div>
        </div>
        <div class="box slogan">
          <div class="box-user">
            <img id="picture" alt="User picture" src="https://pbs.twimg.com/profile_images/1150517248668446721/s4I_f4i2_400x400.jpg">
            <p id="username">Quentin Sar</p>
          </div>
          <p id="type">Eco-Slogan </p>
          <p id="text">My-EcoIdea est le best site réseau social pour l'écologie, mais j'aimerais une phrase plus longue</p>
          <div class="box-actions">
            <div id="like" class="ic medium fl col-md-3"  data-no-user="1" >
              <img src="@/assets/items/Hearth_W.svg">
              <p>192</p>
            </div>
          </div>
        </div> 
        <div class="box idea">
          <div class="box-user">
            <img id="picture" alt="User picture" src="https://pbs.twimg.com/profile_images/1150517248668446721/s4I_f4i2_400x400.jpg">
            <p id="username">Quentin Sar</p>
          </div>
          <p id="keyword">Ecologie</p>
          <p id="keyword">My-EcoIdea</p>
          <p id="keyword">Quotidien</p>
          <p id="categories" data-toggle="tooltip" data-placement="top" title="Quotidien">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="couch" class="svg-inline--fa fa-couch fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"></path></svg></p>
          <p id="description">Mon idée est d'améliorer notre éco-quotidien en étant inscrit sur le réseau social my ecoidea</p>
          <div class="box-actions">
            <div id="like" class="ic medium fl col-md-3"  data-no-user="1" >
              <img src="@/assets/items/Hearth_W.svg">
              <p>192</p>
            </div>
            <div id="follow">
              <img src="@/assets/items/Follow.svg">
              <p>123</p>
            </div>
            <div id="discover" @click='discover("idea_exemple")'>Découvrir</div>
          </div>
          <div class="box-idea-details" id="idea_exemple">
            <p id="title">Détails de l'idée</p>
            <div id="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quisquam voluptatem itaque facilis doloremque officia perferendis cumque in molestiae quo nihil odit placeat quaerat, accusantium necessitatibus dicta blanditiis laborum ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quidem ipsa nihil, pariatur eligendi, fugiat magni dolor exercitationem iure, nemo sed tempora. Adipisci dignissimos quos commodi repellendus tenetur numquam repellat.
            </div>
            <div id="links">
              <p>source wikipéda<img src="@/assets/items/Link.svg"></p>
              <p>sarquentin.fr<img src="@/assets/items/Link.svg"></p>
            </div>
            <div id="images">
              <img src="https://image.freepik.com/vecteurs-libre/logo-eco-carre_1025-316.jpg">
              <img src="https://cdn.pixabay.com/photo/2017/04/02/19/23/environment-2196690_960_720.jpg">
              <img src="https://cdn.pixabay.com/photo/2017/04/02/19/23/environment-2196690_960_720.jpg">
            </div>
          </div>
        </div>    
      </div>
      <div class="col-md-3"></div>
  </div>
</template>
<style lang="stylus" src="./home.styl"></style>
<script src="./home.js"></script>