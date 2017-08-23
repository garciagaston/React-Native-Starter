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

export default class AddQuote extends React.Component {

  render() {
    return (
      <Container>
        <Content padder>
          <Text>
            Agregar frase
          </Text>
        </Content>
      </Container>
    );
  }
}

AddQuote.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Agregar frase</Title>
      </Body>
      <Right>
        <Button rounded transparent onPress={() => navigation.navigate("AboutUs")}>
          <Icon name="md-information-circle"/>
        </Button>
        <Button rounded transparent onPress={() => navigation.navigate("Favorites")}>
          <Icon name="heart"/>
        </Button>
      </Right>
    </Header>
  )
});
