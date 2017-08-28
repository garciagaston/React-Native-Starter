import React, { Component } from 'react';
import {
  Text,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title
} from "native-base";

import QuoteDeckSwiper from "./QuoteDeckSwiper";
import styles from './QuotePage.style.js';
import Config from "../config.js";

export default class QuotePage extends Component {

  render() {
    const {state} = this.props.navigation;
    let quote = state.params.quote || {};
    return (
      <QuoteDeckSwiper quote={state.params.quote} navigation={this.props.navigation}/>
    );
  }
}

QuotePage.navigationOptions = ({navigation}) => ({header: (
    <Header hasTabs>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>Frase</Title>
      </Body>
    </Header>
  )});
