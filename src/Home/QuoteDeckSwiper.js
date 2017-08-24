import React from "react";
import {Image, View, Share} from "react-native";
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
  Button,
  Icon
} from "native-base";

import _ from 'lodash';
import Config from "../config.js";
import cards from "./data";
import styles from "./styles";
const background = [require('../../img/swiper-1.png'), require('../../img/swiper-2.png'), require('../../img/swiper-3.png'), require('../../img/swiper-4.png')]

export default class QuoteDeckSwiper extends React.Component {

  constructor() {
    super();
    this.state = {
      likes: [],
      dislikes: []
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
                    <Text style={{
                      paddingRight: 5
                    }}>Siguiente</Text>
                    <Icon name="ios-arrow-forward-outline"/>
                  </Button>
                </Right>
              </CardItem>
              <CardItem cardBody>
                <Image style={styles.image} source={background[item.image]}>
                  <Text style={[
                    styles.quote, {
                      'fontFamily': Config.fonts[item.font]
                    }
                  ]}>"{item.quote}"</Text>
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
                  <Button primary onPress={() => this._share(item.quote)}>
                    <Icon active name="share" style={styles.likeIcon}/>
                    <Text>Compartir</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
          </View>
        }/>
      </View>
    )
  }

}
