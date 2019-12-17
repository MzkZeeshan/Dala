import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default BookStyle = StyleSheet.create({
  View: {
    flex:1,
  },
  subtxt: {
    color:"#07adb9",
    alignSelf:"center"
  },
  headsub: {
    alignSelf:"center",
    paddingHorizontal:20,
    paddingVertical:10,
    justifyContent: 'center',



  },
  head: {
    backgroundColor: '#fff',
    width: '90%',
    alignItems: 'center',
    color: 'blue',
    borderRadius: 5,
    height: 50,
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection:"row"
  },
  
});
