import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height/3;

export default CancelStyle = StyleSheet.create({
  View: {
    flex:1,
    backgroundColor: '#fff',

  },
  bg1: {
    width: width/3,
    height: height,
    resizeMode: 'contain',
  },


});
