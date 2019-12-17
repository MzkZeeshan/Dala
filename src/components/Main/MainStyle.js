import {StyleSheet, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 1.5;

export default MainStyle = StyleSheet.create({
  View: {
    // height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontSize: 14,
    paddingVertical: 6,
    color: '#07adb9',
  },
  Txt: {
 
    color: '#fff',
  },
  bg: {
    flex: 1,
    // width: "100%",
    height: height,
  },

  Text: {
    flex: 1,
    alignSelf: 'center',
    color: 'gray',
    paddingHorizontal: 20,
  },
  viewBoxTop: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logoimage: {
    width: imageWidth,
    resizeMode: 'contain',
  },
  worldImage: {
    width: imageWidth,
    height: 200,
    resizeMode: 'contain',
  },
  viewBoxTop: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBoxBtm: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ButtonStyle: {
    backgroundColor: '#07adb9',
    width: '90%',
    alignItems: 'center',
    color: 'blue',
    borderRadius: 5,
    height: 50,
    marginVertical: 10,
    justifyContent: 'center',
  },
});
