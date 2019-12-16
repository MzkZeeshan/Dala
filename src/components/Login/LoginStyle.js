import {StyleSheet, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 3;
const imageWidth1 = Dimensions.get('window').width / 1.5;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default LoginStyle = StyleSheet.create({
  View: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Txt: {
    color: '#fff',
  },
  Icon: {
    fontSize: 24,
  },
  bg: {
    flex: 1,
    // width: width,
    // height: height,
  },

  viewBoxTop: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  Logoimage: {
    width: imageWidth,
    // height: 100,
    resizeMode: 'contain',
  },

  Main: {
    borderColor: '#fff',
    borderWidth: 0.5,
    backgroundColor: '#fafafa',
    width: '85%',
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'gray',
    shadowRadius: 5,
    shadowOpacity: 1.0,
    height:"80%",
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // top: 5,
    // zIndex:1
  },
  H1: {
    color: '#000',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  InputTextView: {},

  TextInputView: {
    marginVertical: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.41,

    elevation: 1,
  },
  TextInputStyle: {
    flex: 1,
    color: 'grey',
    marginRight: 10,
  },
  ButtonStyle: {
    backgroundColor: '#07adb9',
    width: '90%',
    alignItems: 'center',
    color: 'blue',
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'center',
    paddingVertical: 15,
    // position: 'absolute',
  },
});
