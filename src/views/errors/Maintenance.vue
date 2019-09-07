<template>
  <div class="maintenance">
    <div class="col-md-4"></div>
    <div class="middle col-md-4">
      <div class="content">
        <img alt="Project logo" src="@/assets/images/logo.png">
        <h1>Les services sont en maintenance</h1>
        <p>Notre équipe est actuellement entrain de travailler sur le site. Pour plus d'information rejoignez-nous sur <a href="https://twitter.com/my_ecoidea">@Twitter</a> ou bien <a href="#">Discord</a></p>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<style lang="stylus">
.maintenance
  text-align center
  .content
    margin-top 50px
    text-align center
    box-shadow 0 0 5px 2px #eeeeee
    padding 25px
    border-radius 15px
    img 
      height 200px
      display inline-block
    h1
      font-size 2em
      text-align center
    p
      margin-top 25px
</style>
