import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./Home/";
import Favorites from "./Favorites/";
import AddQuote from "./AddQuote/";
import SideBar from "./SideBar/SideBar";
import Help from "./Help/";
import AboutUs from "./AboutUs/";

const Router = DrawerNavigator(
  {
    Home: { screen: Home },
    Favorites: { screen: Favorites },
    AddQuote: { screen: AddQuote },
    Help: { screen: Help },
    AboutUs: { screen: AboutUs },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default Router;
