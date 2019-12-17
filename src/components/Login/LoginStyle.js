import {StyleSheet, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 3;
const imageWidth1 = Dimensions.get('window').width / 1.5;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default LoginStyle = StyleSheet.create({
  View: {
    alignItems: 'center',
  // marginTop:-40,
    flex:1
  },

  Txt: {
    color: '#fff',
  },
  Icon: {
    fontSize: 24,
    color:"#07adb9" ,
    
  },
  Iconview: {
    backgroundColor:"#07adb9",
    padding:1
    
  },
  end: {
    color:"#07adb9" ,
  },
  subH: {
    fontSize: 14,
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlign: 'center',
    color: 'gray',
  },
  textbottom: {
color:'#b2b2b2',
alignSelf:"flex-start",
paddingHorizontal:15
  },
  textbom: {
color:'#b2b2b2',

// textAlign: 'center',
  },
  bg: {
    flex: 1,
    backgroundColor: '#07adb9',
    borderBottomLeftRadius:80,
    borderBottomRightRadius:80
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
    flex: 1,
    borderColor: '#fff',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 10,
    shadowRadius: 5,
    alignItems: 'center',
    shadowColor: "#000",
    elevation: 3,
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
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    elevation: 1,
    width: '90%',
    shadowColor: "#000",
elevation: 3,
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
    alignSelf:"center",
    marginVertical: 10,
    justifyContent: 'center',
    paddingVertical: 15,
  marginBottom:-20
  
},
ButtonStylefb: {
  marginTop:30,
    backgroundColor: '#2E87BF',
    width: '80%',
    alignItems: 'center',
    color: 'blue',
    borderRadius: 5,
    alignSelf:"center",
    marginVertical: 10,
    justifyContent: 'center',
    paddingVertical: 15,

  },
});
