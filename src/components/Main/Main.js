import React, { Component } from "react";
import MainStyle from "./MainStyle";
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
  ImageBackground
} from "react-native";
import { Actions } from "react-native-router-flux";
import routesKey from "../../navigation/routeskey";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // const { navigate } = this.props.navigation;

    return (
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground
          style={MainStyle.bg}
          resizeMode="stretch"
          source={require("../../assets/images/1.png")}
        >
          <View style={MainStyle.viewBoxTop}>
            <Image
              style={MainStyle.Logoimage}
              source={require("../../assets/images/3.png")}
            />
          </View>
        </ImageBackground>
        <View style={MainStyle.View}>
          <Text style={MainStyle.Text}>
            Now you 'll be more than few taps away form
          </Text>
          <Text style={MainStyle.Text}>your next tratment</Text>

          <TouchableOpacity
            onPress={() => {
              Actions[routesKey.LANGUAGE]();
              // this.props.navigation.navigate('Country');
            }}
          >
            <Text style={MainStyle.link}>Change Country ? </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Actions[routesKey.COUNTRY]();
              // this.props.navigation.navigate('ChangeLanguage');
            }}
          >
            <Text style={MainStyle.link}>Change Language </Text>
          </TouchableOpacity>
        </View>
        <View style={MainStyle.viewBoxBtm}>
          <TouchableOpacity
            style={MainStyle.ButtonStyle}
            onPress={() => {
              Actions[routesKey.SHARE_LOCATION]();
              // this.props.navigation.navigate("Country");
            }}
          >
            <Text style={MainStyle.Txt}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
