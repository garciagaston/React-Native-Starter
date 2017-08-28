const React = require("react-native");
const { StyleSheet } = React;
//import colors from '../../native-base-theme/variables/material';

export default StyleSheet.create({
  imagePreview: {
    resizeMode: "cover",
    width: null,
    height: 85,
    flex: 1
  },
  gridPreview: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  fontPreview: {
    color: '#fff',
    fontSize: 19,
    paddingLeft: 10
  },
  iconButtonPreview: {
    color: '#fff',
    fontSize: 31,
  }
});
