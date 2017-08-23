import React, { Component } from "react";
import Help from "./Help.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  Help: { screen: Help }
}));
