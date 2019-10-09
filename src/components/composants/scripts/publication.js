import like from '@/assets/items/interact/like.svg'
import fav from '@/assets/items/interact/star.svg'

export default {
  name: 'publication',
  components: {
    like,
    fav
  },
  props: {
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
  }
}