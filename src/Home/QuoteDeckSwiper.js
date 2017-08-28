import React from "react";
import {Image, View, Share, AsyncStorage} from "react-native";
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
  Icon,
  Spinner,
  Toast
} from "native-base";

import _ from 'lodash';
import Config from "../config.js";
import cards from "./data";
import styles from "./styles";
const background = [require('../../img/swiper-1.png'), require('../../img/swiper-2.png'), require('../../img/swiper-3.png'), require('../../img/swiper-4.png')]

export default class QuoteDeckSwiper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: [],
      dislikes: [],
      showClose: props.navigation,
      quotes: props.quote ? [props.quote] : []
    };
  }

  componentDidMount () {
    if (!this.props.quote){
      this._getQuotesStorage();
    }
    this._getLikesStorage();
    this._getDislikesStorage();
  }

  async _getQuotesStorage() {
    let response = await AsyncStorage.getItem('quotes');
    let quotes = await JSON.parse(response) || [];
    quotes = [];
    if (quotes.length) {
      this.setState({
        quotes
      });
    } else {
      this.setState({
        quotes: cards
      });
      await AsyncStorage.setItem('quotes', JSON.stringify(cards)).then(res => {
        /*Toast.show({
          text: 'Listado de frases actualizado.',
          position: 'bottom',
          buttonText: 'Okay',
          duration: 1000
        });*/
      });
    }
  }

  async _getLikesStorage() {
    let response = await AsyncStorage.getItem('likes');
    let likes = await JSON.parse(response) || [];
    if (likes.length) {
      this.setState({
        likes
      });
    }
  }

  async _getDislikesStorage() {
    let response = await AsyncStorage.getItem('dislikes');
    let dislikes = await JSON.parse(response) || [];
    if (dislikes.length) {
      this.setState({
        dislikes
      });
    }
  }

  async _like(card) {
    var likes = this.state.likes;
    if (likes.indexOf(card.id) == -1) {
      likes.push(card.id);
    } else {
      likes = _.pull(likes, card.id);
    }
    var dislikes = _.pull(this.state.dislikes, card.id);
    this.setState({likes: likes, dislikes: dislikes});
    await AsyncStorage.setItem('likes', JSON.stringify(likes));
    await AsyncStorage.setItem('dislikes', JSON.stringify(dislikes));
    await AsyncStorage.setItem('likedQuotes', '[]');
  }

  async _dislike(card) {
    var dislikes = this.state.dislikes;
    if (dislikes.indexOf(card.id) == -1) {
      dislikes.push(card.id);
    } else {
      dislikes = _.pull(dislikes, card.id);
    }
    var likes = _.pull(this.state.likes, card.id);
    this.setState({like: likes, dislikes: dislikes});
    await AsyncStorage.setItem('likes', JSON.stringify(likes));
    await AsyncStorage.setItem('dislikes', JSON.stringify(dislikes));
    await AsyncStorage.setItem('likedQuotes', '[]');
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
    console.log('quote:', this.props.quote);
      return (

        <View style={styles.view}>
        {
          this.state.quotes.length
          ? <DeckSwiper ref={(mr) => this._deckSwiper = mr} dataSource={this.state.quotes} looping={true} renderItem={item => <View>
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
                  {
                    this.state.showClose ?
                    <Button transparent primary onPress={() => this.props.navigation.goBack()}>
                      <Text style={{
                        paddingRight: 5
                      }}>Cerrar</Text>
                      <Icon name="md-close"/>
                    </Button>
                    :
                    <Button transparent primary onPress={() => this._deckSwiper._root.swipeRight()}>
                      <Text style={{
                        paddingRight: 5
                      }}>Siguiente</Text>
                      <Icon name="ios-arrow-forward-outline"/>
                    </Button>
                  }
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
        : <Spinner color='red' />
      }
      </View>
    )
  }

}
