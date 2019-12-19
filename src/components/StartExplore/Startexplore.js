import React, { Component } from "react";
import Startstyle from "./Startexplorestyle";
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
  ImageBackground
} from "react-native";
import { Actions } from "react-native-router-flux";
import Routeskey from "../../navigation/routeskey";

export default class Startexplore extends Component {
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
          style={Startstyle.bg}
          resizeMode="stretch"
          source={require('../../assets/images/2.png')}>
          <View style={Startstyle.viewBoxTop}>
            <Image
              style={Startstyle.Logoimage}
              source={require('../../assets/images/3.png')}
            />
          </View>
          <View style={Startstyle.viewBoxTop1}>
            <Image
              style={Startstyle.worldImage}
              source={require('../../assets/images/11.png')}
            />
          </View>
        </ImageBackground>
        <View style={Startstyle.View}>
          <View style={{paddingHorizontal: '20%'}}>
            <Text style={Startstyle.h1}>Book your next treatement</Text>
          </View>
          <View style={Startstyle.border}></View>
          <View style={{paddingHorizontal: 15}}>
            <Text style={Startstyle.subH}>
              We use data to show more of what you care and less of what you
              don't.You can
            </Text>
            <Text style={Startstyle.read}>read more here.</Text>
          </View>

          <TouchableOpacity
            style={Startstyle.ButtonStyle}
            onPress={() => {
              Actions[Routeskey.CREATE_ACCOUNT]();
            }}>
            <Text style={Startstyle.Txt}>Start exploring</Text>
          </TouchableOpacity>
          <View style={Startstyle.borderlow}></View>
        </View>
      </ScrollView>
    );
  }
}
