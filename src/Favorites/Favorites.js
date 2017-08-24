import React from "react";
import {AsyncStorage, ListView} from "react-native";
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
  CardItem
} from "native-base";

import _ from 'lodash';
import styles from "../Home/styles";
export default class Favorites extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ds: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      likes: [],
      likedQuotes: [],
      loading: true
    };
  }

  componentDidMount () {
    this._getQuotesLikedStorage();
  }

  async _getQuotesLikedStorage() {
    let response = await AsyncStorage.getItem('likedQuotes');
    let likedQuotes = await JSON.parse(response) || [];
    if (likedQuotes.length) {
      this.setState({
        likedQuotes,
        loading: false
      });
    } else {
      response = await AsyncStorage.getItem('quotes');
      let quotes = await JSON.parse(response) || [];

      response = await AsyncStorage.getItem('likes');
      let likes = await JSON.parse(response) || [];
      let likedQuotes = _.filter(quotes, function(q) { return _.indexOf(likes, q.id) >= 0 });
      this.setState({
        likes,
        likedQuotes,
        loading: false
      });
      await AsyncStorage.setItem('likedQuotes', JSON.stringify(likedQuotes));
    }
  }

  render() {
    let dataSource = this.state.ds.cloneWithRows(this.state.likedQuotes);
    return (
      <Container>
        <Content padder>
          {
            this.state.loading
            ? <Spinner color='red' />
            : <ListView
                dataSource={dataSource}
                enableEmptySections={ true }
                renderRow={(item) =>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text>{item.quote}</Text>
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
                        </Button>
                      </Right>
                    </CardItem>
                  </Card>
                }
              />
          }
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
