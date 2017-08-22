const React = require("react-native");

const { StyleSheet } = React;

export default styles = {
  view: { height: 450, flex: 1, padding: 10 },
  image: {
    resizeMode: "cover",
    width: null,
    flex: 1,
    height: 300,
    alignItems: 'center',
    justifyContent:'center',
  },
  quote: {
    textAlign: 'center',
    color: '#fff'
  },
  likeIcon: {
    fontSize: 32
  },
  buttonIcon: {
    alignItems: 'center'
  },
  buttonIconNoActive: {
    color: '#000'
  }

};
