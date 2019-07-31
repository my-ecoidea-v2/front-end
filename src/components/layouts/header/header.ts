export default {
  name: 'header',
  data: () => ({
    items: [
      {
        name: 'accueil',
        url_link: '/',
        icon_name: 'Home'
      },
      {
        name: 'créer',
        url_link: '/idea/create-idea',
        icon_name: 'Add'
      },
      {
        name: 'rechercher',
        url_link: '/search',
        icon_name: 'Search'
      },
      {
        name: 'compte',
        url_link: '/account/login',
        icon_name: 'Profil'
      }
    ]
  })
}
