import {StyleSheet, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 3;
const imageWidth1 = Dimensions.get('window').width / 2.5;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 1.9;

export default CountryStyle = StyleSheet.create({
  View: {
    // height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    height: 120,
    marginHorizontal: 15,
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
    flex: 1,
    // width: width,
    // height: height,
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
  viewBoxB: {
    justifyContent: 'flex-end',
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
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: 'gray',
  },

  countryView: {
    marginTop: 2,
    flexDirection: 'row',
    borderColor: '#07adb9',
    borderWidth: 0.5,
    backgroundColor: 'white',
    width: '79.5%',
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  ButtonStyle: {

    backgroundColor: '#07adb9',
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'blue',
    borderRadius: 5,
    height: 50,
    marginVertical: 10,
    justifyContent: 'center',
  },
});
