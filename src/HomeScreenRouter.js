import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import HomeScreen from "./HomeScreen/index.js";
import Favorites from "./Favorites/index.js";
import AddQuote from "./AddQuote/index.js";
import SideBar from "./SideBar/SideBar.js";
import Help from "./Help/index.js";
import AboutUs from "./AboutUs/index.js";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Favorites: { screen: Favorites },
    AddQuote: { screen: AddQuote },
    Help: { screen: Help },
    AboutUs: { screen: AboutUs },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
