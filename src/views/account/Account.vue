<template>
    <div>
        <Cookies/>
        <Session/>
        <div class="col-sm-2 content">
        </div>
        <div class="col-sm-6 content">
            <div class="page-title">
                <h1>Mon profil</h1>
            </div>
            <div class="box profil">
                <img class="picture" alt="User" src="https://pbs.twimg.com/profile_images/1150517248668446721/s4I_f4i2_400x400.jpg">
                <h3 class="user-name">Quentin Sar</h3>
                <div class="user-info">
                    <span class="nb-ideas">2 publications</span>
                </div>
                <div class="account-logout" @click='logout'>déconnexion</div>
            </div>
            <div class="user-selection">
              <div class="item selected" data-section="user-publications">Publications</div>
              <div class="item" data-section="user-projects">Projets</div>
              <div class="item" data-section="user-favorites">Favoris</div>
            </div>
            <section class="section user-publications" selected>
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
                    <div class="discover action col-xs-4" >
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
            </section>
            <section class="section user-projects">
              <center style="margin-top: 60px">
                <h4>La création de projets sera bientôt disponible</h4>
                <h5><a href="/">Découvrir</a></h5>
              </center>
            </section>
            <section class="section user-favorites">
              <center style="margin-top: 60px">
                <h4>Vous n'avez aucun favoris</h4>
                <h5><a href="/">Découvrir</a></h5>
              </center>
            </section>
        </div>
        <div class="col-sm-4 content">
        </div>
    </div>
</template>
<style lang="stylus" src="./account.styl"></style>
<script src="./account.js"></script>
