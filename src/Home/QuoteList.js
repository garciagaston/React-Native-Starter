import React from "react";
import {AsyncStorage, ListView, TouchableHighlight, Image} from "react-native";
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
  Button,
  Spinner,
  Card,
  CardItem,
  View
} from "native-base";

import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from "./QuoteList.style.js";
import Config from "../config.js";
const background = [require('../../img/swiper-1.png'), require('../../img/swiper-2.png'), require('../../img/swiper-3.png'), require('../../img/swiper-4.png'), require('../../img/swiper-4.png')]

export default class QuoteList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ds: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      likes: [],
      dislikes: [],
      quotes: [],
      loading: true
    };
  }

  componentDidMount () {
    this._getQuotesStorage();
  }

  async _getQuotesStorage() {
    response = await AsyncStorage.getItem('quotes');
    let quotes = await JSON.parse(response) || [];

    response = await AsyncStorage.getItem('likes');
    let likes = await JSON.parse(response) || [];

    response = await AsyncStorage.getItem('dislikes');
    let dislikes = await JSON.parse(response) || [];

    this.setState({
      likes,
      dislikes,
      quotes,
      loading: false
    });
  }

  render() {
    let dataSource = this.state.ds.cloneWithRows(this.state.quotes);
    return (
      <View>
          {
            this.state.loading
            ? <Spinner color='red' />
            :
              <View>
                  <ListView
                    dataSource={dataSource}
                    enableEmptySections={ true }
                    renderRow={(item) =>
                      <TouchableHighlight onPress={() => {
                        this.props.navigation.navigate("QuotePage", {quote: item})
                      }}>
                        <Card>
                          <CardItem cardBody>
                            <Image style={styles.imagePreview} source={background[item.image]}>
                              <Grid>
                                <Col size={10}>
                                  <View style={styles.gridPreview}>
                                    <Text style={ styles.fontPreview }>
                                        "{item.quote.substring(0, Config.lengthQuotePreview)}..."
                                    </Text>
                                  </View>
                                </Col>
                                <Col size={2}>
                                  <View style={styles.gridPreview}>
                                    <Icon name="md-more" style={styles.iconButtonPreview} />
                                  </View>
                                </Col>
                              </Grid>
                            </Image>
                          </CardItem>
                        </Card>
                      </TouchableHighlight>
                    }
                  />
                </View>
          }
      </View>
    );
  }
}
