import iconLink from '@/assets/items/Link.svg'
import iconLogo from '@/assets/items/Logo_W.svg'
import iconLike from '@/assets/items/Like.svg'
import iconFollow from '@/assets/items/Follow.svg'

export default {
  name: 'home',
  components: {
    iconLink,
    iconLogo,
    iconLike,
    iconFollow
  },
  mounted: function () {
    var self = this
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
  }
}