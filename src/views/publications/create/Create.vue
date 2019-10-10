<template>
  <div>
    <div class="col-sm-1"></div>
    <div class="col-sm-11">
      <div id="title">Créer une publication</div>
      <div class="content post">
        <div class="defaut col-sm-4">
          <div class="inbox">
            <p class="title">Quel type de publication ?</p>
            <ul>
              <li><label><input type="radio" name="type" value="1" checked autofocus><span>Eco-Idée</span></label></li>
              <li><label><input type="radio" name="type" value="2" checked><span>Eco-Slogan</span></label></li>
            </ul>
          </div>
          <div class="inbox">
            <p class="title">Voulez-vous être anonyme ?</p>
            <ul>
              <li><label><input type="radio" name="anonyme" value="0" checked><span>Non</span></label></li>
              <li><label><input type="radio" name="anonyme" value="1" checked><span>Oui</span></label></li>
            </ul>
          </div>
        </div>
        <div class="type-1 col-sm-4">
          <div class="inbox">
            <p class="title">Résumé court de votre idée</p>
            <textarea id="resume"></textarea>
          </div>
          <div class="inbox">
            <p class="title">Description détaillé de votre idée</p>
            <textarea id="description"></textarea>
          </div>
        </div>
        <div class="type-2 col-sm-4">
          <div class="inbox">
            <p class="title">3 Mots résumants votre idée</p>
            <input class="keyword" id="keyword-1" placeholder="ex : Quotidien">
            <input class="keyword" id="keyword-2">
            <input class="keyword" id="keyword-3">
          </div>
          <div class="inbox">
            <p class="title">Ajouter des liens (optionel)</p>
            <input class="link" id="link-1" placeholder="ex : my-ecoide.org">
            <input class="link" id="link-2">
            <input class="link" id="link-3">
          </div>
        </div>
        <div class="send col-xs-12">
          <div class="btn btn-lg btn-block" @click='validated'>Publier votre idée</div>
        </div>
      </div>
    </div>
    <div id="wave-1"><Wave/></div>
    <div class="footer"><Footer/></div>
  </div>
</template>
<style lang="stylus" src="./create.styl"></style>
<script src="./create.js"></script>
