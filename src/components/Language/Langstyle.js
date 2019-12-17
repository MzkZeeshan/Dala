import {StyleSheet, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 3;
const imageWidth1 = Dimensions.get('window').width / 2.5;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 1.9;

export default LangStyle = StyleSheet.create({
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
  link: {
    fontSize: 14,
    paddingVertical: 6,
    color: 'blue',
  },
  Txt: {
    color: '#fff',
  },
  bg: {
    // flex: 1,
    width: width,
    height: height,
  },
  viewBoxB: {
    width:"100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom:0,
    position:"absolute"
  },

  Text: {
    flex: 1,
    alignSelf: 'center',
    color: 'gray',
    paddingVertical: 5,
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
  LogoCountry: {
    paddingVertical: 4,
    alignSelf: 'center',
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  worldImage: {
    width: imageWidth1,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  listItem: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  listItemDetail: {
    flex: 1,
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
});
