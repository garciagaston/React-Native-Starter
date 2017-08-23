import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  View
} from "native-base";
import { Constants } from 'expo';
import material from '../../native-base-theme/variables/material';

const routes = [
  {
    title: 'Inicio',
    icon: 'md-home',
    destination: 'Home'
  },
  {
    title: 'Favoritos',
    icon: 'heart',
    destination: 'Favorites'
  },
  {
    title: 'Agregar frase',
    icon: 'md-add-circle',
    destination: 'AddQuote'
  },
  {
    title: 'Ayuda',
    icon: 'md-information-circle',
    destination: 'Help'
  },
  {
    title: 'Sobre la app',
    icon: 'md-appstore',
    destination: 'AboutUs'
  }
];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{ height: Constants.statusBarHeight, backgroundColor: material.brandSidebar}} />
          <Image
            source={{
              uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/img/drawer-cover.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/img/logo.png"
              }}
            />
          </Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.destination)}
                >
                  <Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
                  <Text>{data.title}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
