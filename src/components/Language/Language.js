import React, { Component } from "react";
import LangStyle from "./Langstyle";
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
import { Actions } from "react-native-router-flux";

export default class ChangeLanguage extends Component {
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
          style={LangStyle.bg}
          resizeMode="stretch"
          source={require("../../assets/images/2.png")}
        >
          <View style={LangStyle.viewBoxTop}>
            <Image
              style={LangStyle.Logoimage}
              source={require("../../assets/images/3.png")}
            />
          </View>
          <View style={LangStyle.viewBoxTop1}>
            <Image
              style={LangStyle.worldImage}
              source={require("../../assets/images/7.png")}
            />
          </View>
        </ImageBackground>
        <View style={LangStyle.View}>
          <Text style={LangStyle.Text}>Change Labnguage? </Text>
          <View style={LangStyle.countryView}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={LangStyle.LogoCountry}
                source={require("../../assets/images/5.png")}
              />

              <Text style={LangStyle.countryText}>United Kingdom</Text>
            </View>
            <View>
              <Icon
                style={{
                  fontSize: 18,
                  alignSelf: "center",
                  paddingVertical: 10,
                  color: "gray"
                }}
                name="add-circle"
              />
            </View>
          </View>
          <View style={LangStyle.countryView}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={LangStyle.LogoCountry}
                source={require("../../assets/images/6.png")}
              />

              <Text style={LangStyle.countryText}>United Kingdom</Text>
            </View>
            <View>
              <Icon
                style={{
                  fontSize: 18,
                  alignSelf: "center",
                  paddingVertical: 10,
                  color: "gray"
                }}
                name="add-circle"
              />
            </View>
          </View>
        </View>
        <View style={LangStyle.viewBoxB}>
          <TouchableOpacity
            style={LangStyle.ButtonStyle}
            onPress={() => {
              // this.props.navigation.navigate('ShareLocation');
              Actions.drawerOpen()
            }}
          >
            <Text style={LangStyle.Txt}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
