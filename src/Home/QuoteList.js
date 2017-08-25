import React from "react";
import {AsyncStorage, ListView, TouchableHighlight} from "react-native";
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

import _ from 'lodash';
import styles from "../Home/styles";
import QuoteListModal from "./QuoteListModal";

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
      selectedQuote: {},
      showModal: false,
      loadingModal: false,
      loading: true
    };
    this._showModal = this._showModal.bind(this);
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

  _showModal(show = false, quote = {}) {
    this.setState({
      'showModal': show,
      'selectedQuote': quote
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
                        this._showModal(true, item);
                      }}>
                        <Card>
                          <CardItem>
                            <Body>
                              <Text>"{item.quote}"</Text>
                            </Body>
                          </CardItem>
                          <CardItem>
                            <Left>
                              <Button transparent>
                                <Icon name="thumbs-up" />
                              </Button>
                              <Button transparent style={
                                styles.buttonIconNoActive
                              }>
                                <Icon name="thumbs-down" />
                              </Button>
                            </Left>
                            <Body />
                            <Right>
                              <Button transparent>
                                <Icon name="share" />
                                <Text> Compartir</Text>
                              </Button>
                            </Right>
                          </CardItem>
                        </Card>
                      </TouchableHighlight>
                    }
                  />
                  {
                    this.state.showModal &&
                    <QuoteListModal quote={this.state.selectedQuote} showModal={this._showModal}/>
                  }

                </View>
          }
      </View>
    );
  }
}
