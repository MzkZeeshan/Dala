import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height/2.2;

export default paymentStyle = StyleSheet.create({
  View: {
    flex:1,
    backgroundColor: '#f0f0f0',

  },
  H1: {
    color:"#000",
    // fontWeight:"bold",
    fontSize:16

  },
  logo: {
    width: 26,
    height: 26,
    marginHorizontal:5,
    resizeMode: 'contain',
      },
  icon: {
    color:"#b2b2b2",fontSize:20,paddingHorizontal:10

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
    borderRadius: 5,
    justifyContent: 'space-between',
    marginBottom: 10,
    flexDirection:"row",
    marginTop:-12,
    elevation:2,
    paddingVertical:15
},
head1: {
    backgroundColor: '#fff',
    marginBottom: 10,
    width: '90%',
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection:"row",
    elevation:2,
    paddingVertical:15,
  },
});
