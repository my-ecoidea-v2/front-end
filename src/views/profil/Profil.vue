<template>
    <div>
        <Cookies/>
        <Session/>
        <div class="col-sm-3 content">
        </div>
        <div class="col-sm-5 content">
            <div class="page-title">
                <h1>Profil</h1>
            </div>
            <div class="box profil">
                <img class="picture" alt="User" src="https://pbs.twimg.com/profile_images/1150517248668446721/s4I_f4i2_400x400.jpg">
                <h3 class="user-name">Quentin Sar</h3>
                <div class="user-info">
                    <span class="nb-ideas">126 idées</span>
                </div>
                <div class="user-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ab optio repellat, quo, iusto incidunt, ducimus ipsam expedita provident inventore non porro dolorem repellendus debitis facere rerum illo officiis eos.
                </div>
            </div>
            <section class="section user-ideas">
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
            </section>
        </div>
        <div class="col-sm-2 content">
        </div>
    </div>
</template>
<style lang="stylus" src="./profil.styl"></style>
<script src="./profil.js"></script>
