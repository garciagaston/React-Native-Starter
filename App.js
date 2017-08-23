import React from "react";
import Expo from 'expo';
import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import HomeScreen from "./src/HomeScreenRouter.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsAreLoaded: false
    };
  }

  async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),

        'Cabin-Regular': require('./fonts/Cabin-Regular.ttf'),
        'Cabin-Bold': require('./fonts/Cabin-Bold.ttf'),
        'Cabin-Italic': require('./fonts/Cabin-Italic.ttf'),
        'Inconsolata-Regular': require('./fonts/Inconsolata-Regular.ttf'),
        'Inconsolata-Bold': require('./fonts/Inconsolata-Bold.ttf'),
        'Nunito-Bold': require('./fonts/Nunito-Bold.ttf'),
        'Nunito-Regular': require('./fonts/Nunito-Regular.ttf'),
        'NunitoSans-Bold': require('./fonts/NunitoSans-Bold.ttf'),
        'NunitoSans-Italic': require('./fonts/NunitoSans-Italic.ttf'),
        'Pacifico-Regular': require('./fonts/Pacifico-Regular.ttf'),
        'Quicksand-Light': require('./fonts/Quicksand-Light.ttf'),
        'Quicksand-Regular': require('./fonts/Quicksand-Regular.ttf'),
        'Rubik-Italic': require('./fonts/Rubik-Italic.ttf'),
        'Rubik-Regular': require('./fonts/Rubik-Regular.ttf')
      });
      this.setState({fontsAreLoaded: true});
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(material)}>
        <HomeScreen />
      </StyleProvider>
    );
   }
}

Expo.registerRootComponent(App);
