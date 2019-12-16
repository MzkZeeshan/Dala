import {StyleSheet, Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 1.5;

export default Rafastyle = StyleSheet.create({
  
  Main: {
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    color: 'blue',
    borderRadius: 5,
    height: 110,
    marginVertical: 5,
    justifyContent: 'center',
    borderWidth:1,
    borderColor:"gray",
  

  },
  viewBoxTop: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonStyle: {
    backgroundColor: '#07adb9',
    width: '90%',
    alignItems: 'center',
    color: 'blue',
    borderRadius: 5,
    height: 50,
    marginVertical: 10,
    justifyContent: 'center',
  },
  Txt: {
    color: '#fff',
  },
});
