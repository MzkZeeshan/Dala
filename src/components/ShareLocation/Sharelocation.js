import React, { Component } from "react";
import ShareStyle from "./ShareStyle";
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
import {
  Container,
  CardItem,
  Header,
  Content,
  Icon,
  Picker,
  Form,
  Left
} from "native-base";
import routeskey from "../../navigation/routeskey";
import { Actions } from "react-native-router-flux";

export default class ShareLocation extends Component {
  constructor() {
    super();
    this.state = {
      selected: "key1"
    };
  }
  onValueChange = value => {
    this.setState({
      selected: value
    });
  };

  render() {
    // const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={ShareStyle.bg}
          resizeMode="stretch"
          source={require("../../assets/images/2.png")}
        >
          <View style={ShareStyle.viewBoxTop}>
            <Image
              style={ShareStyle.Logoimage}
              source={require("../../assets/images/3.png")}
            />
          </View>
          <View style={ShareStyle.viewBoxTop1}>
            <Image
              style={ShareStyle.worldImage}
              source={require("../../assets/images/8.png")}
            />
          </View>
        </ImageBackground>
        <View style={ShareStyle.View}>
          <View style={{ paddingHorizontal: 25 }}>
            <Text style={ShareStyle.h1}>Find the best salons in your area</Text>
          </View>
          <View style={ShareStyle.border}></View>
          <View style={{ paddingHorizontal: 15 }}>
            <Text style={ShareStyle.subH}>
              Share your with us and we'll help You do just (oh - and the best
              price too)
            </Text>
          </View>
        </View>
        <View style={ShareStyle.viewBoxB}>
          <TouchableOpacity
            style={ShareStyle.ButtonStyle}
            onPress={() => {
              Actions[routeskey.TURN_ON_NOTIFICATION]();

              // this.props.navigation.navigate('Turnonnoti');
            }}
          >
            <Text style={ShareStyle.Txt}>Share location</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
