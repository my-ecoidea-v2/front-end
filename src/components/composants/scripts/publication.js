import like from '@/assets/items/interact/like.svg'
import fav from '@/assets/items/interact/star.svg'

import isLike from '@/assets/items/interact/isLike.svg'
import isFav from '@/assets/items/interact/isStar.svg'

import router from '@/router'

export default {
  name: 'publication',
  components: {
    like,
    fav,
    isLike,
    isFav,
  },
  props: {
    token: {
      type: String,
      default: '[Token]',
    },
    Rlike: {
      type: Number,
      default: 0,
    },
    Rfavoris: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: '[Type]',
    },
    description: {
      type: String,
      default: '[Description]',
    },
    likes: {
      type: [Number, String],
      default: 0
    },
    author: {
      type: String,
      default: '[Author]'
    },
  },
  data: function () {
    return {
      isLiked: this.Rlike,
      isFavoris: this.Rfavoris,
    }
  },
  methods: {
    open: function () {
      router.push({path: '/publications/token='+this.token});
    },
    like: function () {
      fetch('http://api.my-ecoidea.org/api/publication/interact/like', {
        method: 'put',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
          'Authorization': 'Bearer ' + localStorage.token
        },
        body: JSON.stringify({ token: this.token })
      })
      .then(response => { return response.text() })
      .then((data) => {
        if(this.isLiked == true) this.isLiked = false;
        else if(this.isLiked == false) this.isLiked = true;
      })
    },
    favoris: function () {
      fetch('http://api.my-ecoidea.org/api/publication/interact/favoris', {
        method: 'put',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
          'Authorization': 'Bearer ' + localStorage.token
        },
        body: JSON.stringify({ token: this.token })
      })
      .then(response => { return response.text() })
      .then((data) => {
        if(this.isFavoris == true) this.isFavoris = false;
        else if(this.isFavoris == false) this.isFavoris = true;
      })
    }
  },
}