<template>
  <div>
    <div class="col-sm-1 content hidden-xs">
    </div>
    <div class="col-sm-10">
      <div class="title">
        <p id="title">Mon profil</p>
      </div>
      <div class="box profil">
          <img class="picture" alt="User" src="@/assets/images/logo.png">
          <h3 class="user-name">{{ name }}</h3>
          <div class="user-info">
              <span class="nb-ideas">{{ publicationsCount }} publications</span>
          </div>
          <div class="account-logout" @click='logout'>déconnexion</div>
      </div>
      <div class="user-selection">
        <div class="item selected" data-section="user-publications">Publications</div>
        <div class="item" data-section="user-projects">Projets</div>
        <div class="item" data-section="user-favorites">Favoris</div>
      </div>
      <section class="section user-publications" selected>
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
  </div>
</template>
<style lang="stylus" src="./account.styl"></style>
<script src="./account.js"></script>
