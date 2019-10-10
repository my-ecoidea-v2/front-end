<template>
  <div>
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
