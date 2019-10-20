import Wave from '@/assets/elem/wave.svg'
import fav from '@/assets/items/interact/star.svg'
import like from '@/assets/items/interact/like.svg'

import publication from '@/components/composants/Publications.vue'

import Footer from '@/components/layouts/footer/Footer.vue'
import isLike from '@/assets/items/interact/isLike.svg'
import isFav from '@/assets/items/interact/isStar.svg'

export default {
  name : 'idea',
  components: {
    publication: publication,
    Wave, 
    Footer,
    like,
    fav,
    isLike,
    isFav,
  },
  data: function () {
    return {
      resume: '',
      keywords: '',
      description: '',
      links: '',
      author: '',
      likes: 0,
      isLiked: false,
      isFavoris: false,
    }
  },
  props: {
    token: {
      type: String,
      default: '[token]',
    },
  },
  mounted: function () {
    this.getPublication();
  },
  methods: {
    getPublication: function () {
      fetch('http://api.my-ecoidea.org/api/publication/get', {
        method: 'post',
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
        const publication = JSON.parse(data)['publication']

        this.resume = publication.content.description
        this.description = publication.content.texte
        
        let keyarray = [];
        publication.content.keywords.forEach(keyword => {
          keyarray.push(keyword.keyword)
        });
        this.keywords = keyarray

        let linkarray = [];
        if (publication.content.links != null) {
          publication.content.links.forEach(link => {
            if (!link.link.includes('http') || !link.link.includes('https')){
              linkarray.push('http://'+link.link)
            }
          });
          this.links = linkarray
        }
        this.author = publication.user.name
        this.likes = publication.likes
        this.isLiked = publication.isLike
        this.isFavoris = publication.isFavoris
      })
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