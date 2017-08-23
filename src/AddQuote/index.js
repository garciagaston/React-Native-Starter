import React, { Component } from "react";
import AddQuote from "./AddQuote.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  AddQuote: { screen: AddQuote }
}));
