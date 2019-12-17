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

export default class Location extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'key1',
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
        <Head title="My Bookings" setting={true}/>
        
            <Text>Location </Text>
    </View>
    );
  }
}
