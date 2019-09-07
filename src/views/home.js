import Session from '@/components/layouts/session/Session.vue'
import Account from '@/components/layouts/account/Account.vue'
import Cookies from '@/components/layouts/cookies/Cookies.vue'

import iconLink from '@/assets/items/Link.svg'
import iconLogo from '@/assets/items/Logo_W.svg'
import iconLike from '@/assets/items/Like.svg'
import iconFollow from '@/assets/items/Follow.svg'



export default {
  name: 'home',
  components: {
    Session,
    iconLink,
    iconLogo,
    iconLike,
    iconFollow,
    Account,
    Cookies
  },
  methods: {
    discover: function(div) {
      console.log('test')
      $('#'+div).toggle();  
    }
  }
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})