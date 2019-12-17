import React, {Component} from 'react';
import Turnstyle from './TrunStyle';
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

export default class ShareLocation extends Component {
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
    // const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <ImageBackground
          style={Turnstyle.bg}
          resizeMode="stretch"
          source={require('../../assets/images/10.png')}>
          <View style={Turnstyle.viewBoxTop}>
            <Image
              style={Turnstyle.Logoimage}
              source={require('../../assets/images/3.png')}
            />
          </View>
          <View style={Turnstyle.viewBoxTop1}>
            <Image
              style={Turnstyle.worldImage}
              source={require('../../assets/images/9.png')}
            />
          </View>
        </ImageBackground>
        <View style={Turnstyle.View}>
          <View style={{paddingHorizontal: '20%'}}>
            <Text style={Turnstyle.h1}>Manage your Bookings easily </Text>
          </View>
          <View style={Turnstyle.border}></View>
          <View style={{paddingHorizontal: 15}}>
            <Text style={Turnstyle.subH}>
              Turn on notification and we'll help you manage your appointments
              with booking reminders, salons dictection and esay reschuduling if
              you plans change
            </Text>
          </View>

          <TouchableOpacity
            style={Turnstyle.ButtonStyle}
            onPress={() => {
              this.props.navigation.navigate('ShareLocation');
            }}>
            <Text style={Turnstyle.Txt}>Turn on notifaction</Text>
          </TouchableOpacity>
          <View style={Turnstyle.borderlow}></View>
        </View>
      </ScrollView>
    );
  }
}
