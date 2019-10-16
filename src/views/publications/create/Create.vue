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
              <li><label><input v-on:keyup.enter="validated" type="radio" name="type" value="1" checked @click='typeChange'><span>Eco-Idée</span></label></li>
              <li><label><input v-on:keyup.enter="validated" type="radio" name="type" value="2" @click='typeChange'><span>Eco-Slogan</span></label></li>
            </ul>
          </div>
          <div class="inbox">
            <p class="title">Voulez-vous être anonyme ?</p>
            <ul>
              <li><label><input v-on:keyup.enter="validated" type="radio" name="anonyme" value="0" checked><span>Non</span></label></li>
              <li><label><input v-on:keyup.enter="validated" type="radio" name="anonyme" value="1"><span>Oui</span></label></li>
            </ul>
          </div>
        </div>
        <p id="error">{{ error }}</p>
        <div v-if='type == 2' class="slogan">
          <div class="type-1 col-sm-4">
            <div class="inbox">
              <p class="title">Votre slogan</p>
              <textarea id="description"></textarea>
            </div>
          </div>
        </div>
        <div v-if='type == 1' class="idea">
          <div class="type-1 col-sm-4">
            <div class="inbox">
              <p class="title">Résumé court de votre idée</p>
              <textarea v-model="resume" id="resume"></textarea>
            </div>
            <div class="inbox">
              <p class="title">Description détaillé de votre idée</p>
              <textarea v-model="description" id="description"></textarea>
            </div>
          </div>
          <div class="type-2 col-sm-4">
            <div class="inbox">
              <p class="title">3 Mots résumants votre idée</p>
              <input v-on:keyup.enter="validated" v-model="keyword_1" class="keyword" id="keyword_1" placeholder="ex : Quotidien">
              <input v-on:keyup.enter="validated" v-model="keyword_2" class="keyword" id="keyword_2">
              <input v-on:keyup.enter="validated" v-model="keyword_3" class="keyword" id="keyword_3">
            </div>
            <div class="inbox">
              <p class="title">Ajouter des liens (optionel)</p>
              <input v-on:keyup.enter="validated" v-model="link_1" class="link" id="link_1" placeholder="ex : my-ecoide.org">
              <input v-on:keyup.enter="validated" v-model="link_2" class="link" id="link_2">
              <input v-on:keyup.enter="validated" v-model="link_3" class="link" id="link_3">
            </div>
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