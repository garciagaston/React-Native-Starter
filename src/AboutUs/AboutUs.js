import React from "react";
import { StackNavigator } from "react-navigation";
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

export default class AboutUs extends React.Component {

  render() {
    return (
      <Container>
        <Content padder>
          <Text>
            Sobre la App
          </Text>
        </Content>
      </Container>
    );
  }
}

AboutUs.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Sobre la App</Title>
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
