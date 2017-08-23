import React, { Component } from "react";
import AboutUs from "./AboutUs.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  AboutUs: { screen: AboutUs }
}));
