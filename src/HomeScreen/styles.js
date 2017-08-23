const React = require("react-native");
const { StyleSheet } = React;
import colors from '../../native-base-theme/variables/material.js';

export default styles = {
  view: { height: 510, flex: 1 },
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
  buttonShare: {
    //alignSelf: "center",
  },
  buttonIconNoActive: {
    opacity: 0.3
  },
  fabButton: {
    backgroundColor: colors.toolbarDefaultBg
  }
};
