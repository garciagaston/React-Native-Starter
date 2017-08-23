import React from "react";
import {AppRegistry, Image, View, Share} from "react-native";
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
  Icon,
  Fab,
  Footer,
  FooterTab
} from "native-base";
import IconF from 'react-native-vector-icons/SimpleLineIcons';
import _ from 'lodash';

import styles from "./styles";
import cards from "./data";

const background = [
  require('../../img/swiper-1.png'),
  require('../../img/swiper-2.png'),
  require('../../img/swiper-3.png'),
  require('../../img/swiper-4.png')
]

const fonts = ['Cabin-Regular', 'Cabin-Bold', 'Cabin-Italic', 'Inconsolata-Regular', 'Inconsolata-Bold', 'Nunito-Bold', 'Nunito-Regular', 'NunitoSans-Bold', 'NunitoSans-Italic', 'Pacifico-Regular', 'Quicksand-Light', 'Quicksand-Regular', 'Rubik-Italic', 'Rubik-Regular'];

export default class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      likes: [],
      dislikes: [],
      showAddQuotes: false
    };
  }

  _like(card) {
    var likes = this.state.likes;
    if (likes.indexOf(card.id) == -1) {
      likes.push(card.id);
    } else {
      likes = _.pull(likes, card.id);
    }
    var dislikes = _.pull(this.state.dislikes, card.id);
    this.setState({likes: likes, dislikes: dislikes})
  }

  _dislike(card) {
    var dislikes = this.state.dislikes;
    if (dislikes.indexOf(card.id) == -1) {
      dislikes.push(card.id);
    } else {
      dislikes = _.pull(dislikes, card.id);
    }
    var likes = _.pull(this.state.likes, card.id);
    this.setState({like: likes, dislikes: dislikes})
  }

  _share(quote) {
    Share.share({
      message: quote,
      url: 'http://asdasdasdasdad.com',
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
            <DeckSwiper ref={(mr) => this._deckSwiper = mr} dataSource={cards} looping={true} renderItem={item => <View>
              <Card style={{
                elevation: 3
              }}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>{item.category}</Text>
                    </Body>
                  </Left>
                  <Right>
                  <Button transparent primary onPress={() => this._deckSwiper._root.swipeRight()}>
                    <Text style={{paddingRight: 5}}>Siguiente</Text>
                    <Icon name="ios-arrow-forward-outline"/>
                  </Button>
                  </Right>
                </CardItem>
                <CardItem cardBody>
                  <Image style={styles.image} source={background[item.image]}>
                    <Text style={[styles.quote, {'fontFamily': fonts[item.font]}]}>"{item.quote}"</Text>
                  </Image>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button active={this.state.likes.indexOf(item.id) > -1} transparent primary onPress={() => this._like(item)}>
                      <Icon name="thumbs-up" style={[
                        this.state.likes.indexOf(item.id) == -1 && styles.buttonIconNoActive,
                        styles.likeIcon
                      ]}/>
                    </Button>
                    <Button active={this.state.dislikes.indexOf(item.id) > -1} transparent primary onPress={() => this._dislike(item)}>
                      <Icon name="thumbs-down" style={[
                        this.state.dislikes.indexOf(item.id) == -1 && styles.buttonIconNoActive,
                        styles.likeIcon
                      ]}/>
                    </Button>
                  </Left>
                  <Right>
                  <Button primary style={styles.buttonShare} onPress={() => this._share(item.quote)}>
                    <Icon active name="share" style={styles.likeIcon}/>
                    <Text>Compartir</Text>
                  </Button>

                  </Right>
                </CardItem>
              </Card>
            </View>}/>
          </View>
        </Content>

        {this.state.showAddQuotes > 0 && <Fab direction="up" position="bottomRight" style={styles.fabButton}>
          <Icon name="md-add"/>
        </Fab>}

        <Footer>
          <FooterTab>
            <Button active vertical>
              <Icon active name="apps"/>
              <Text>Todas</Text>
            </Button>
            <Button vertical>
              <Icon name="camera"/>
              <Text>Frases 1</Text>
            </Button>
            <Button vertical>
              <Icon name="navigate"/>
              <Text>Frases 2</Text>
            </Button>
            <Button vertical>
              <Icon name="person"/>
              <Text>Frases 3</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
HomeScreen.navigationOptions = ({navigation}) => ({header: (
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
        <Button rounded transparent onPress={() => navigation.navigate("AboutUs")}>
          <Icon name="md-information-circle"/>
        </Button>
        <Button rounded transparent onPress={() => navigation.navigate("Favorites")}>
          <Icon name="heart"/>
        </Button>
      </Right>
    </Header>
  )});
