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
    Footer
  },
}
