import {StyleSheet, Dimensions} from 'react-native';
const imageWidth = Dimensions.get('window').width / 3;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height/2.2;

export default CheckStyle = StyleSheet.create({
  View: {
    flex:1,
    backgroundColor: '#f0f0f0',

  },
  Txt: {
    color: '#fff',
  },
  Logoimage: {
    width: imageWidth,
    height: height,
    resizeMode: 'contain',
  },
  ButtonStyle: {
    backgroundColor: '#07adb9',
    width: '70%',
    alignItems: 'center',
    color: 'blue',
    borderRadius: 5,
    alignSelf:"center",
    marginVertical: 10,
    justifyContent: 'center',
    paddingVertical: 15,
  
},

});
