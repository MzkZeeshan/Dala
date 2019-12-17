import {StyleSheet, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 3;
const imageWidth1 = Dimensions.get('window').width / 1.5;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 1.9;

export default ShareStyle = StyleSheet.create({
  View: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewBoxB: {
    width:"100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom:0,
    position:"absolute"
  },

  Txt: {
    color:"#fff"
  },
  bg: {
    width: width,
    height: height,
  },

  viewBoxTop: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBoxTop1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  Logoimage: {
    width: imageWidth,
    height: 100,
    resizeMode: 'contain',
  },

  worldImage: {
    width: imageWidth1,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
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
  h1: {
    fontSize: 24,
    paddingHorizontal: 12,
    marginVertical: 3,
    textAlign: 'center',
  },
  subH: {
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center',
    color: 'gray',
  },
  border: {
    width: '25%',
    marginTop: 5,
    borderBottomColor: '#AFA5E2',
    borderBottomWidth: 5,
    borderRadius: 5,
  },

});
