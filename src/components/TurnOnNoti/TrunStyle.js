import {StyleSheet, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 3;
const imageWidth1 = Dimensions.get('window').width / 4;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 1.9;

export default Turnstyle = StyleSheet.create({
  View: {
    // height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewCountry: {
    // height: '30%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bg: {
    // flex: 1,
    width:width,
    height:height

  
  },
  Txt: {
    color:"#fff"

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
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  countryText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: 'gray',
  },

  countryView: {
    marginTop: 2,
    flexDirection: 'row',
    borderColor: '#07adb9',
    borderWidth: 0.5,
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
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
    paddingVertical: 15,
    textAlign: 'center',
    color: 'gray',
  },
  border: {
    width: '25%',
    marginVertical:10,
    borderBottomColor: '#F5D13D',
    borderBottomWidth: 5,
    borderRadius: 5,
  },
  viewBoxB: {
    width:"100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom:0,
    position:"absolute"
  },
});
