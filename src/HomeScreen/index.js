import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  HomeScreen: { screen: HomeScreen }
}));
