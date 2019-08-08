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
        name: 'publier',
        url_link: '/publications/create',
        icon_name: 'Add'
      },
      {
        name: 'rechercher',
        url_link: '/publications/search',
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
