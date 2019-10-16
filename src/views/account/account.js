import iconLink from '@/assets/items/Link.svg'
import iconLogo from '@/assets/items/Logo_W.svg'
import iconLike from '@/assets/items/Like.svg'
import iconFollow from '@/assets/items/Follow.svg'

import store from '@/store'
import router from '@/router'

export default {
  name: 'home',
  components: {
    iconLink,
    iconLogo,
    iconLike,
    iconFollow
  },
  data: function () {
    return {
      name,
      publicationsCount: 0,
      mePublications: null,
    }
  },
  mounted: function () {
    this.getUsername();
    this.getPublications();
    $('.user-selection .item').click(function () {
      $(this).parent().children('.selected').attr('class', 'item')
      $(this).attr('class', 'item selected')

      let section = '.' + $(this).attr('data-section')
      console.log(section)
      $('.section[selected]').removeAttr('selected')
      $(section).attr('selected', 'true')
    })
    $('.discover').click(function () {
      $(this).parents('.box.idea').children('.box-idea-details').toggle()
    })
  },
  methods: {
    getPublications: function () {
      fetch('http://api.my-ecoidea.org/api/user/mePublications', {
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
          this.mePublications = JSON.parse(data);
          this.publicationCount = JSON.parse(data).lenght;
          if (this.publicationCount == null) this.publicationCount == 0;
          console.log(this.mePublications)
          console.log(this.publicationCount)
      })
    },
    getUsername: function () {
      fetch('http://api.my-ecoidea.org/api/user/get', {
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
          this.name = JSON.parse(data)['user']['name'];
      })
    },
    logout: function () {
      fetch('http://api.my-ecoidea.org/api/user/logout', {
        method: 'post',
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
          store.commit('setLogin')
          router.push({path:'/bienvenue'})
      })
    }
  }
}