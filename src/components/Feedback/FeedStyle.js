import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height/2.2;

export default FeedStyle = StyleSheet.create({
  View: {
    flex:1,
    backgroundColor: '#f0f0f0',

  },
  H1: {
    color:"#000",
    // fontWeight:"bold",
    fontSize:18

  },
   Txt: {
    color: '#fff',
  },
  TextInputView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    borderRadius:5,
    paddingHorizontal:10,
    alignItems:'center',
    marginTop:-10,
    elevation:2
  },
  TextInputView1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    borderRadius:5,
    paddingHorizontal:10,
    alignItems:'center',
    marginVertical:5,
    elevation:2
},
  TextInputView1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    borderRadius:5,
    paddingHorizontal:10,
    alignItems:'center',
    marginVertical:5,
    elevation:2
},
  TextInputView2: {
    // flexDirection: 'row', 
    backgroundColor: 'white',
    width: '90%',
    borderRadius:5,
    paddingHorizontal:10,
    // alignItems:'center',
    marginVertical:5,
    elevation:2,
    height:150,
},
TextInputStyle: {
   flex:1,      
  // textAlign:"center", 
   color:'grey',
   marginRight:10
   
  
},
TextInputStyle1: {
   flex:1,      
  // textAlign:"center", 
   color:'grey',
  //  marginRight:10
   
  
},
  icon: {
    color:"#b2b2b2",fontSize:20,paddingHorizontal:10

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
  // marginBottom:-20
  
}
 
});
