import React, { Component } from "react";
import Favorites from "./Favorites.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  Favorites: { screen: Favorites }
}));
