<template>
  <div>
      <div class="col-md-3 content"></div>
      <div class="col-md-6 content">
        <div class="box search">
          <input id="search-input" name="search-txt" type="text" placeholder="Rechercher">
          <div id="search-btn"><img alt="Search icon" src="@/assets/items/Search_W.svg"></div>
        </div>
        <div class="box slogan">
          <div class="box-user">
            <img id="picture" alt="User picture" src="https://pbs.twimg.com/profile_images/1150517248668446721/s4I_f4i2_400x400.jpg">
            <p id="username">Quentin Sar</p>
          </div>
          <p id="type">Eco-Slogan </p>
          <p id="text">My-EcoIdea est le best site réseau social pour l'écologie, mais j'aimerais une phrase plus longue</p>
          <div class="box-actions">
            <div id="like" class="ic medium fl"  data-no-user="1" >
              <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 512 512" focusable="false" data-prefix="fal" data-icon="heart"><path fill="currentColor" d="M 462.3 62.7 c -54.5 -46.4 -136 -38.7 -186.6 13.5 L 256 96.6 l -19.7 -20.3 C 195.5 34.1 113.2 8.7 49.7 62.7 c -62.8 53.6 -66.1 149.8 -9.9 207.8 l 193.5 199.8 c 6.2 6.4 14.4 9.7 22.6 9.7 c 8.2 0 16.4 -3.2 22.6 -9.7 L 472 270.5 c 56.4 -58 53.1 -154.2 -9.7 -207.8 Z m -13.1 185.6 L 256.4 448.1 L 62.8 248.3 c -38.4 -39.6 -46.4 -115.1 7.7 -161.2 c 54.8 -46.8 119.2 -12.9 142.8 11.5 l 42.7 44.1 l 42.7 -44.1 c 23.2 -24 88.2 -58 142.8 -11.5 c 54 46 46.1 121.5 7.7 161.2 Z"></path></svg>
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
            <div id="like" class="ic medium fl"  data-no-user="1" >
              <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 512 512" focusable="false" data-prefix="fal" data-icon="heart"><path fill="currentColor" d="M 462.3 62.7 c -54.5 -46.4 -136 -38.7 -186.6 13.5 L 256 96.6 l -19.7 -20.3 C 195.5 34.1 113.2 8.7 49.7 62.7 c -62.8 53.6 -66.1 149.8 -9.9 207.8 l 193.5 199.8 c 6.2 6.4 14.4 9.7 22.6 9.7 c 8.2 0 16.4 -3.2 22.6 -9.7 L 472 270.5 c 56.4 -58 53.1 -154.2 -9.7 -207.8 Z m -13.1 185.6 L 256.4 448.1 L 62.8 248.3 c -38.4 -39.6 -46.4 -115.1 7.7 -161.2 c 54.8 -46.8 119.2 -12.9 142.8 11.5 l 42.7 44.1 l 42.7 -44.1 c 23.2 -24 88.2 -58 142.8 -11.5 c 54 46 46.1 121.5 7.7 161.2 Z"></path></svg>
              <p>192</p>
            </div>
            <div id="follow">
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
              <p>123</p>
            </div>
            <div id="discover" @click='discover("idea_exemple")'>Découvrir</div>
          </div>
          <div class="box-idea-details" id="idea_exemple">
            <p id="title">Détails de l'idée</p>
            <div id="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quisquam voluptatem itaque facilis doloremque officia perferendis cumque in molestiae quo nihil odit placeat quaerat, accusantium necessitatibus dicta blanditiis laborum ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quidem ipsa nihil, pariatur eligendi, fugiat magni dolor exercitationem iure, nemo sed tempora. Adipisci dignissimos quos commodi repellendus tenetur numquam repellat.
            </div>
            <div id="links">
              <p>source wikipéda<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"></path></svg></p>
              <p>sarquentin.fr<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"></path></svg></p>
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
<style lang="stylus" src="./search.styl"></style>
<script src="./search.js"></script>