import React from "react";
import {AppRegistry, Image, View, Share} from "react-native";
import {
  Text,
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Title,
  Button,
  Icon
} from "native-base";

import styles from "./styles";
import QuoteDeckSwiper from "./QuoteDeckSwiper";
import FooterHome from "./FooterHome";
import Config from "../config";

export default class Home extends React.Component {

  render() {

    return (
      <Container>
        <Content padder>
            <QuoteDeckSwiper />
        </Content>
        <FooterHome />
      </Container>
    );
  }
}

Home.navigationOptions = ({navigation}) => ({header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu"/>
        </Button>
      </Left>
      <Body>
        <Title>HomeScreen</Title>
      </Body>
      <Right>
        <Button rounded transparent onPress={() => navigation.navigate("AddQuote")}>
          <Icon name="md-add-circle"/>
        </Button>
        <Button rounded transparent onPress={() => navigation.navigate("AboutUs")}>
          <Icon name="md-information-circle"/>
        </Button>
        <Button rounded transparent onPress={() => navigation.navigate("Favorites")}>
          <Icon name="heart"/>
        </Button>
      </Right>
    </Header>
  )});
