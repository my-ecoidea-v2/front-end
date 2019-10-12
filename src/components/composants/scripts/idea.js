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
      resume: 'Ne pas laisser nos chargeurs sur la prise une fois que nous ne les utilisons plus pour économiser l\'énergie',
      keywords: ['Ecologie', 'Quotidien', '#LifeStyle'],
      description: 'Envisageons le pire scénario (par ailleurs complètement surréaliste) : supposons que ces six chargeurs restent branchés 24 heures sur 24, 7 jours sur 7 pendant un an, soit 8760 heures. Résultat, ces six produits ont dégagé ensemble 0,3 watts. Ce n’est pas énorme, certes, mais il y a bien une consommation d’énergie lorsqu’un chargeur reste branché, même si cette consommation est infime. On atteindrait alors une consommation annuelle de 2,628 kWh. Ainsi, ce n\'est pas un grosse perte énergétique (même s\'il elle doit tout de même être prise en compte) ni une dépense extravagante (de l\'ordre de 50 centimes), mais cela endommage le chargeur qui par la suite consommera plus et pourra endommager la batterie de vos appareil\. Et entre nous, ça ne mange pas de pain que de le débrancher quand on s\'en sert pas.',
      links: ['my-ecoidea.org','my-ecoidea.org','my-ecoidea.org'],
      author: 'My-EcoIdea',
      likes: 2983
    }
  },
  props: {
    token: {
      type: String,
      default: '[token]',
    },
  }
}
