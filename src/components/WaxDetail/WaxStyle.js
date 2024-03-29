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
  bg: {
    // flex: 1,
    width: width,
    height: height,
  },
  iconimage:{
      width:32,
      height:32,
        resizeMode:"contain"
  },
  card:{
    backgroundColor:"#fff",
    alignItems:"center",
    borderRadius:5,
    paddingHorizontal:10,
    marginHorizontal:10,
    padding:5,
    width:155,
    elevation:3,
    borderWidth:2,
    borderColor:"#fff"
},
cardcolor:{
    backgroundColor:"#fff",
    alignItems:"center",
    borderRadius:5,
    paddingHorizontal:10,
    marginHorizontal:10,
    width:160,
    padding:5,
    elevation:2,
    borderWidth:2,
    borderColor:"#07adb9"
  },
  offpeak:{
    backgroundColor:"#dff5f6",
    padding:2,
    borderRadius:20,
    margin:10,
},
  offpeaktxt:{
    color:"#19b4be",
    paddingHorizontal:5,
},
  detail:{
    backgroundColor:"#07adb9",
    padding:5,
    borderRadius:20,
    margin:5
},
  detailtxt:{
    color:"#fff",
    paddingHorizontal:10
},
  align: {
    flexDirection:"row",justifyContent:"space-between"
  },
  heart:{
    borderRadius:100,
    backgroundColor:"#b2b2b2",
    elevation:2,
    padding:5,
    alignItems:"center",
    margin:10
  },
  icon:{
    color:"#f89a00",fontSize:18
  },
  text: {
    color:"#b2b2b2",
    fontSize:12
  },
  H1: {
 color:"#000",
 fontWeight:"bold",
 fontSize:18,
 paddingHorizontal:10,
 paddingVertical:10,
},
  cardtxtsel: {
 color:"#07adb9",
 fontSize:18,
 paddingHorizontal:10,
 paddingVertical:10,
},
  cardtxt: {
 color:"#000",
 fontSize:18,
 paddingHorizontal:10,
 paddingVertical:10,
},
blue: {
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

  H00: {
 color:"#b2b2b2",
 marginLeft:5,
 fontSize:12,
 marginTop:2,
},
  H11: {
 color:"#000",
 paddingHorizontal:5
},

H2: {
    color:"#b2b2b2",
    fontSize:18,
    paddingVertical:10,
  },
    high: {
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 5,
    alignSelf:"center",
    marginVertical: 10,
    justifyContent: 'center',
    elevation:2,
    marginTop:-15,
},
        high1: {
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 5,
    alignSelf:"center",
    marginVertical: 10,
    justifyContent: 'center',
    elevation:2,
    // marginTop:-15,
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
},

highMain: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    alignSelf:"center",
    alignContent:"center",
},
MainCenter: {
    backgroundColor: '#fff',
    elevation:2,
    borderRadius: 5,
    marginHorizontal:10,
    marginVertical:2,

},

scroll: {
    backgroundColor: '#fff',
    elevation:2,
    borderRadius: 5,
    marginHorizontal:10,
    paddingBottom:20,
    marginVertical:2,

},
btn: {
    backgroundColor:"#07adb9"
    ,width:"90%",
    alignSelf:"center",
    alignItems:"center",
    marginVertical:10,
    paddingVertical:15
},
btntxt: {
    alignSelf:"center",flex:1,color:"#fff",fontWeight:"bold"
},
btnview: {
    position:"absolute",top:15,right:10
},
subtext: {
    alignSelf:"flex-end" 
    ,backgroundColor:"#fff",
    paddingHorizontal:5,
    color:"#07abd9",
   borderRadius:4
},
});
