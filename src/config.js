const Config = {
  showAddQuotes: true,
  showFavorites: true,
  showHelp: true,
  showAboutUs: true,
  fonts: ['Cabin-Regular', 'Cabin-Bold', 'Cabin-Italic', 'Inconsolata-Regular', 'Inconsolata-Bold', 'Nunito-Bold', 'Nunito-Regular', 'NunitoSans-Bold', 'NunitoSans-Italic', 'Pacifico-Regular', 'Quicksand-Light', 'Quicksand-Regular', 'Rubik-Italic', 'Rubik-Regular'],
  categories: [{title: 'Frases 1', icon: ''}, {title: 'Frases 2', icon: ''}, {title: 'Frases 3', icon: ''}],
  routes: [
    {
      title: 'Inicio',
      icon: 'md-home',
      destination: 'Home'
    },
    {
      title: 'Favoritos',
      icon: 'heart',
      destination: 'Favorites'
    },
    {
      title: 'Agregar frase',
      icon: 'md-add-circle',
      destination: 'AddQuote'
    },
    {
      title: 'Ayuda',
      icon: 'md-information-circle',
      destination: 'Help'
    },
    {
      title: 'Sobre la app',
      icon: 'md-appstore',
      destination: 'AboutUs'
    }
  ]
};
export default Config;
