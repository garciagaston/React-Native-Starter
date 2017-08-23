import React from "react";

import {
  Text,
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button
} from "native-base";

export default class Favorites extends React.Component {

  render() {
    return (
      <Container>
        <Content padder>
          <Text>
            Favoritos
          </Text>
        </Content>
      </Container>
    );
  }
}

Favorites.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Favoritos</Title>
      </Body>
      <Right>
        <Button rounded transparent onPress={() => navigation.navigate("Home")}>
          <Icon name="md-images"/>
        </Button>
        <Button rounded transparent onPress={() => navigation.navigate("AboutUs")}>
          <Icon name="md-information-circle"/>
        </Button>
      </Right>
    </Header>
  )
});
