import {StyleSheet, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 3;
const imageWidth1 = Dimensions.get('window').width / 4;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 5;

export default Favstyle = StyleSheet.create({
  View: {
    // height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width: 120,
    height:100,
    borderRadius:10,
    // resizeMode:'contain',
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
    margin:10
  },

  
  highMain: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    // alignSelf:"center",
    alignContent:"center",
  },
  h1: {
    color:"#000",
    fontWeight:"bold",
    paddingHorizontal:1,
    fontSize:18,
    paddingHorizontal:10
  },
  text: {
    color:"#b2b2b2",
    fontSize:12
  },
  image: {
    backgroundColor: '#fff',
    width: '40%',
    padding:5,
    // alignSelf:"center",
    alignContent:"center",
  },
  next: {
    backgroundColor: '#fff',
    width: '60%',
    // alignSelf:"center",
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
    marginTop:-15,
},
card: {
    backgroundColor: '#fff',
    width: '95%',
    color: 'blue',
    borderRadius: 5,
    alignSelf:"center",
    flexDirection:"row",
    elevation:2,
    marginVertical:5
},
});
