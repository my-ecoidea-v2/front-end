import Cookies from '@/components/layouts/cookies/Cookies.vue'

import iconLink from '@/assets/items/Link.svg'
import iconLogo from '@/assets/items/Logo_W.svg'
import iconLike from '@/assets/items/Like.svg'
import iconFollow from '@/assets/items/Follow.svg'
import iconSearch from '@/assets/items/Search_W.svg'

import Wave from '@/assets/elem/wave.svg'

import publication from '@/components/composants/Publications.vue'

import Footer from '@/components/layouts/footer/Footer.vue'

export default {
  components: {
    iconLink,
    iconLogo,
    iconLike,
    iconFollow,
    iconSearch,
    Cookies,
    publication: publication,
    Wave, 
    Footer,
  },
  data: function () {
    return {
      publications: '',
    }
  },
  mounted: function () {
    this.getPublications();
  },
  methods: {
    getPublications: function () {
      fetch('http://api.my-ecoidea.org/api/user/meFavoris', {
        method: 'get',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
          'Authorization': 'Bearer ' + localStorage.token
        }
      })
      .then(response => { return response.text() })
      .then((data) => {
        this.publications = JSON.parse(data)['favoris']
        this.publications.forEach(publication => {
          if (publication.idea.type_id == 1)
          {
            publication.idea.type = 'Eco-Idea'
          }
        });
      })
    }
  }
}
