import React, { Component } from "react";
import Home from "./Home.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  Home: { screen: Home }
}));
