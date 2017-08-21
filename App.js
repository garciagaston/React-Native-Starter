import React from "react";
import Expo from 'expo';

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
      });
      this.setState({fontsAreLoaded: true});
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <Expo.AppLoading />;
    }
    return (
      <HomeScreen />
    );
   }
}

Expo.registerRootComponent(App);
