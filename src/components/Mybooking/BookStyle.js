import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height/2.2;

export default BookStyle = StyleSheet.create({
  View: {
    flex:1,
    backgroundColor: '#fff',

  },
  subtxt: {
    color:"#07adb9",
  },
  txt:{
color:"#fff"
  },
  waxh1: {
    color:"#000",
    textAlign:"center",
    fontWeight:"bold",
    fontSize:14,
    paddingHorizontal:1,

    paddingVertical:2
  },
  waxh3: {
    color:"#07adb9",
    fontWeight:"bold",
    fontSize:14,
    paddingHorizontal:5,
    paddingVertical:2
  },
  orangeTxt: {
    color:"#fbce98",
    paddingHorizontal:5,
    paddingVertical:2
  },
  orangeTxtH1: {
    color:"#fbce98",
    fontWeight:"bold",
    fontSize:14,
    paddingHorizontal:10,
    paddingVertical:2
  },
  orange: {
    backgroundColor:'#FFF6E5',
    justifyContent:"space-between",
    flexDirection:"row",
    paddingVertical:10
  },
  waxh2: {
    color:"#b2b2b2",
    textAlign:"center",
    paddingVertical:2,
    fontSize:14,
  },
  time: {
    color:"#07adb9",
    fontSize:24,
    paddingVertical:10,
    paddingHorizontal:10,
  },
  date: {
    color:'#b2b2b2',
  },
  onimageView: {
    backgroundColor: '#fff',
    width: '70%',
    alignItems: 'center',
    alignSelf:"center",
    marginTop:-25,
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'center',
    elevation:2
  },
  wax: {
    backgroundColor: '#fff',
    width: '90%',
    alignSelf:"center",
    borderRadius: 5,
    marginVertical: 10,
    elevation:2
  },
  h1: {
    color:"#000",
    fontSize:20,
    paddingHorizontal:20,
    paddingVertical:5,
    fontWeight:"bold"
  },
  bg: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
  logo: {
width: 26,
height: 26,
marginHorizontal:3,
resizeMode: 'contain',
  },
  headsub: {
    alignItems:"center",
    paddingHorizontal:40,
    paddingVertical:10,
    justifyContent: 'center',
  },
  head: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection:"row",
    marginTop:-12,
    elevation:2
  },
  ButtonStyle: {
    backgroundColor: '#07adb9',
    width: '85%',
    alignItems: 'center',
    alignSelf:"center",
    color: 'blue',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical:10,
    elevation:2,
    justifyContent: 'center',
  },
});
