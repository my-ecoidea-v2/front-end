import Wave from '@/assets/elem/wave.svg'
import fav from '@/assets/items/interact/star.svg'
import like from '@/assets/items/interact/like.svg'

import publication from '@/components/composants/Publications.vue'

import Footer from '@/components/layouts/footer/Footer.vue'

export default {
  name : 'idea',
  components: {
    publication: publication,
    Wave, 
    Footer,
    fav,
    like
  },
  data: function () {
    return {
      resume: '',
      keywords: '',
      description: '',
      links: '',
      author: '',
      likes: 0,
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
      })
    }
  }
}
