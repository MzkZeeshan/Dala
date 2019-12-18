import React, {Component} from 'react';
import LocationStyle from './LocationStyle';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
  CheckBox,
  FlatList,
  ImageBackground,
} from 'react-native';
import Head from "../Header/Header"
import MapView from 'react-native-maps';
export default class Location extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  onValueChange = value => {
    this.setState({
      selected: value,
    });
  };

  render() {

    return (
    <View style={LocationStyle.View}>
        <Head title="Location" setting={true}/>
        <Text>asdsa</Text>
        <View style={styles.container}>
     {/* <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView> */}
   </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });