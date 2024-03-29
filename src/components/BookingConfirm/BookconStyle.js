import {StyleSheet, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 3;
const imageWidth1 = Dimensions.get('window').width /3;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 2.1;

export default BookconStyle = StyleSheet.create({
  View: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapView: {
    height: 140,
    width: 400,
    width:"100%",
    marginVertical:10,
  },
  icon: {
    color:"#b2b2b2",fontSize:20,paddingHorizontal:10

  },
  H: {
    color:"#000",
    fontSize:16

  },
  map: {
    height: 140,
    width:"100%",
  },
  H11: {
    color:"#000",
    fontWeight:"bold",
    paddingHorizontal:5
   },
  h1:{
    color: '#fff',
  fontSize:18,alignSelf:"center",
  paddingVertical:10
  },
  head1: {
    backgroundColor: '#fff',
    marginVertical: 5,
    width: '90%',
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection:"row",
    elevation:2,
    paddingVertical:15,
    alignSelf:"center"
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
    elevation:5,
  },
  Txt: {
    color: '#fff',
  },
  Txt1: {
    color: '#07adb9',
  },
  orange: {
    width: '95%',
    alignSelf:"center",
    backgroundColor:'#FFF6E5',
    justifyContent:"space-between",
    flexDirection:"row",
    paddingVertical:10
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
  logo: {
    width: 26,
    height: 26,
    marginHorizontal:3,
    resizeMode: 'contain',
      },
  timeView: {
    paddingVertical: 5,
    borderLeftWidth: 1,
    borderLeftColor: "#f0f0f0",
    paddingHorizontal: 10
  },
  time: {
    color:"#07adb9",
    fontSize:24,
    paddingVertical:10,
    paddingHorizontal:10,
  },
  time1: {
    color:"#07adb9",
    fontSize:18,
  
  },
  date: {
    color:'#b2b2b2',
  },
  bg: {
    // flex: 1,
    width: width,
    height: height,
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
    flexDirection:"row"
  },
  
  Logoimage: {
    width: imageWidth,
    height: 100,
    resizeMode: 'contain',
  },
  sub: {
    backgroundColor: '#fff',
    width: '95%',
    color: 'blue',
    borderRadius: 10,
    alignSelf:"center",
    paddingHorizontal: 5,
    marginVertical:5,
    elevation:1,

},
align: {
  flexDirection:"row",justifyContent:"space-between"
},
H1: {
  color:"#000",
  fontWeight:"bold",
  fontSize:18,
  paddingHorizontal:10,
  paddingVertical:10,
 },
 H0: {
  color:"#07adb9",
  paddingLeft:10
},

H00: {
color:"#b2b2b2",
fontSize:14,
},
 
  ButtonStyle: {
    backgroundColor: '#07adb9',
    width: '47%',
    alignItems: 'center',
    color: 'blue',
    borderRadius: 5,
    height: 50,
    marginVertical: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  ButtonStyle1: {
    borderColor: '#07adb9',
    borderWidth:1,
    width: '47%',
    alignItems: 'center',
    color: 'blue',
    borderRadius: 5,
    height: 50,
    marginVertical: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
});
