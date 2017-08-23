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

export default class Help extends React.Component {

  render() {
    return (
      <Container>
        <Content padder>
          <Text>
            Ayuda
          </Text>
        </Content>
      </Container>
    );
  }
}

Help.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Ayuda</Title>
      </Body>
      <Right>
        <Button rounded transparent onPress={() => navigation.navigate("Home")}>
          <Icon name="md-images"/>
        </Button>
        <Button rounded transparent onPress={() => navigation.navigate("Favorites")}>
          <Icon name="heart"/>
        </Button>
      </Right>
    </Header>
  )
});
