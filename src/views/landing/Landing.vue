<template>
  <div class="session">
    <div class="icon">
      <img src="@/assets/images/logo.png" alt="My-EcoIdea logo" class="img-rounded">
    </div>
    <div class="title">
      <h1>My-EcoIdea</h1>
      <p>Vous souhaite la bienvenue sur nos services.</p>
    </div>
    <div class="idea-exemple col-md-4">
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
    <div class="col-md-4"></div>
    <div class="session-box">
      <ul>
        <li class="col-md-3 hidden-xs"></li>
        <router-link to="account/login"><li class="col-md-3 col-xs-6" ><div id="login">Connexion</div></li></router-link>
        <router-link to="account/register"><li class="col-md-3 col-xs-6" ><div id="register">Inscription</div></li></router-link>
        <li class="col-md-3 hidden-xs"></li>
      </ul>
      <p>Connectez-vous pour avoir accès au contenu</p>
    </div>
    <Wave/>
  </div>
</template>

<style lang="stylus" src="./landing.styl"></style>
<script src="./landing.js"></script>
