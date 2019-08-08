import Session from '@/components/layouts/session/Session.vue'

import iconLink from '@/assets/items/Link.svg'

export default {
  name: 'home',
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      },
    ],
  },
  components: {
    Session,
    iconLink
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