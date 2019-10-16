import like from '@/assets/items/interact/like.svg'
import fav from '@/assets/items/interact/star.svg'

import router from '@/router'

export default {
  name: 'publication',
  components: {
    like,
    fav
  },
  props: {
    token: {
      type: String,
      default: '[Token]',
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
  methods: {
    open: function () {
      router.push({path: '/publications/token='+this.token});
    }
  }
}