import {StyleSheet, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 3;
const imageWidth1 = Dimensions.get('window').width / 4;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 5;

export default Allstyle = StyleSheet.create({
  View: {
    // height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width: width/1.1,
    height:150,
    // borderRadius:10,
    resizeMode:'cover',
  },
  icon:{
    color:"#f89a00",fontSize:18
  },
  heart:{
    borderRadius:100,
    backgroundColor:"#fff",
    elevation:2,
    padding:5,
    alignItems:"center",
    marginRight:10
},


highMain: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    borderRadius: 5,
    // alignSelf:"center",
    alignContent:"center",
  },
  h1: {
    color:"#000",
    fontWeight:"bold",
    fontSize:18,
    paddingHorizontal:10
  },
  text: {
    color:"#b2b2b2",
    fontSize:12
  },
  image: {
    backgroundColor: '#fff',
    padding:5,
    alignSelf:"center",
  },
  next: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignContent:"center",
  },
  high: {
    backgroundColor: '#fff',
    flexDirection:"row",
    width: '95%',
    color: 'blue',
    borderRadius: 5,
    alignSelf:"center",
    marginVertical: 10,
    justifyContent: 'center',
    elevation:2,
    // marginTop:-15,
},
card: {
    backgroundColor: '#fff',
    width: '95%',
    color: 'blue',
    borderRadius:10,
    alignSelf:"center",
    paddingTop:20,
    marginTop:-15,
    elevation:2,
    marginVertical:5
},
card1: {
    backgroundColor: '#fff',
    width: '95%',
    color: 'blue',
    borderRadius: 10,
    alignSelf:"center",
    padding:5,
    elevation:2,
    marginVertical:5
},
});
