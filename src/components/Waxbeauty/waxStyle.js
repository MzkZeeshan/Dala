import {StyleSheet, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 3;
const imageWidth1 = Dimensions.get('window').width / 4;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 1.9;

export default Waxstyle = StyleSheet.create({
  View: {
    // height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  H1: {
 color:"#07adb9",
 fontWeight:"bold",
 fontSize:18,
 paddingHorizontal:10,
 paddingVertical:10,
 
 
},
H0: {
    color:"#07adb9",
    paddingLeft:10
},
Hblack: {
    color:"#000",
    fontWeight:"bold",
    paddingLeft:10
},
  H00: {
 color:"#b2b2b2",
 marginLeft:5,
 fontSize:12,
 marginTop:2,
//  alignSelf:"center"
//  fontWeight:"bold",
 
 
},
  H11: {
 color:"#000",
//  fontWeight:"bold",
 paddingHorizontal:5
//  textAlign:"center"
//  paddingVertical:10,
 
 
},
H2: {
    color:"#b2b2b2",
    fontSize:18,
    paddingVertical:10,
  },
H2: {
    color:"#b2b2b2",
    fontSize:18,
    paddingVertical:10,
  },
  high: {
    backgroundColor: '#fff',
    width: '95%',
    color: 'blue',
    borderRadius: 5,
    alignSelf:"center",
    marginVertical: 10,
    justifyContent: 'center',
    elevation:2,
    marginTop:-15,
},
subMain: {
      width: '100%',
      alignSelf:"center",
      
},
  sub: {
      backgroundColor: '#fff',
      width: '90%',
      color: 'blue',
      borderRadius: 10,
      alignSelf:"center",
      paddingLeft: 5,
      marginVertical:5,
      elevation:1,
    // justifyContent: 'center',
},
  sub1: {
      backgroundColor: '#fff',
      width: '85%',
      color: 'blue',
      borderRadius: 10,
      alignSelf:"center",
      paddingLeft: 5,
      marginVertical:5,
      elevation:1,
    // justifyContent: 'center',
    // borderLeftWidth:2
},
  subsub: {
    flexDirection:"row",
    justifyContent:"space-between"
},
highMain: {
    backgroundColor: '#f0f0f0',
    width: '95%',
    alignSelf:"center",
    alignContent:"center",
  },
  
});
