import React, { Component } from "react";
import Home from "./Home.js";
import QuotePage from "./QuotePage.js";

import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  Home: { screen: Home },
  QuotePage: { screen: QuotePage }
}));
