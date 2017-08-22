import React from "react";
import { AppRegistry, Image, View, Share } from "react-native";
import {
  Text,
  Container,
  DeckSwiper,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Title,
  Button,
  H1,
  Thumbnail,
  Icon
} from "native-base";
import IconF from 'react-native-vector-icons/SimpleLineIcons';
import _ from 'lodash';
//import { StackNavigator } from "react-navigation";

import styles from "./styles";
import cards from "./data";
//import EditScreenOne from "./EditScreenOne.js";
//import EditScreenTwo from "./EditScreenTwo.js";

export default class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      like: false,
      dislike: false,
    };
  }

  _like(card) {
    this.setState({
        like: !this.state.like,
        dislike: false
    })
  }

  _dislike(card) {
    this.setState({
        like: false,
        dislike: !this.state.dislike
    })
  }

  _share(quote) {
    Share.share({
      message: quote,
      url: 'http://bam.tech',
      title: 'Compartir frase: ' + quote
    }, {
      // Android only:
      dialogTitle: 'Compartir frase: ' + quote
    })
  }

  render() {
    return (
      <Container>
        <Content padder>

        <View style={styles.view}>
          <DeckSwiper
            ref={(mr) => this._deckSwiper = mr}
            dataSource={cards}
            looping={true}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem cardBody>
                  <Image
                    style={styles.image}
                    source={item.image}
                  >
                    <Text style={styles.quote}>{item.quote}</Text>
                  </Image>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button active={this.state.like} transparent onPress={() => this._like(item)}>
                      <Icon name="thumbs-up" style={[!this.state.like && styles.buttonIconNoActive, styles.likeIcon]}/>
                    </Button>
                  </Left>
                  <Body>
                    <Button
                      transparent
                      style={styles.buttonIcon}
                      onPress={() => this._share(item.quote)}>
                      <Icon active name="share" style={styles.likeIcon}/>
                      <Text>Compartir</Text>
                    </Button>
                  </Body>
                  <Right>
                    <Button active={this.state.dislike} transparent onPress={() => this._dislike(item)}>
                      <Icon name="thumbs-down" style={[!this.state.like && styles.buttonIconNoActive, styles.likeIcon]}/>
                    </Button>
                  </Right>
                </CardItem>
              </Card>}
          />
      </View>
      <View style={{ flexDirection: "row", flex: 1, bottom: 50, justifyContent: 'space-between' }}>
        <Button iconLeft transparent onPress={() => this._deckSwiper._root.swipeLeft()}>
          <Icon name="arrow-back" />
          <Text>Anterior</Text>
        </Button>
        <Button iconRight transparent onPress={() => this._deckSwiper._root.swipeRight()}>
          <Text>Siguiente</Text>
          <Icon name="arrow-forward" />
        </Button>
      </View>

        </Content>
      </Container>
    );
  }
}
HomeScreen.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>HomeScreen</Title>
      </Body>
      <Right />
    </Header>
  )
});
