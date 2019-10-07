import Account from '@/components/layouts/account/Account.vue'
import Cookies from '@/components/layouts/cookies/Cookies.vue'

import iconLink from '@/assets/items/Link.svg'
import iconLogo from '@/assets/items/Logo_W.svg'
import iconLike from '@/assets/items/Like.svg'
import iconFollow from '@/assets/items/Follow.svg'
import iconSearch from '@/assets/items/Search_W.svg'

export default {
  name: 'home',
  components: {
    iconLink,
    iconLogo,
    iconLike,
    iconFollow,
    iconSearch,
    Account,
    Cookies
  },
  methods: {
    discover: function (div) {
      console.log('test')
      $('#' + div).toggle()
    }
  }
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
