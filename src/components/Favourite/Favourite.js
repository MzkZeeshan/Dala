import React, { Component } from "react";
import { Container, Header, Content, Accordion, Icon } from "native-base";
import Favstyle from "./Favstyle";
import Head from "../Header/Header";
import RoutesKey from "../../navigation/routeskey";
import { Actions } from "react-native-router-flux";

import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Routeskey from "../../navigation/routeskey";

export default class Favourite extends Component {
  onChange(name, val) {
    this.setState({ [name]: val });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Head title="Favourites" setting={true} iconname="upload" />
        <View style={Favstyle.highMain}>
          <View style={Favstyle.high}>
            <Icon
              name="search1"
              style={{
                color: "#b2b2b2",
                fontSize: 20,
                paddingVertical: 10,
                paddingHorizontal: 10
              }}
              type="AntDesign"
            />

            <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
              placeholder="Search"
              placeholderTextColor="#b2b2b2"
              onChangeText={this.onChange.bind(this, "search")}
            />
          </View>
        </View>

        <TouchableOpacity onPress={() => Actions[RoutesKey.WAX_DETAIL]()}>
          <View style={Favstyle.card}>
            <View style={Favstyle.image}>
              <Image
                style={Favstyle.logo}
                source={require("../../assets/images/booking1.png")}
              />
            </View>
            <View style={Favstyle.next}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={Favstyle.h1}>L'Ecrin de la Feminite</Text>
                </View>
                <View style={Favstyle.heart}>
                  <Icon
                    name="heart"
                    style={{ color: "#ed1f92", fontSize: 16 }}
                    type="FontAwesome"
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#f89a00",
                    fontSize: 14,
                    alignSelf: "center",
                    paddingHorizontal: 5
                  }}
                >
                  4.8
                </Text>
                <Icon name="star" style={Favstyle.icon} type="Entypo" />
                <Icon name="star" style={Favstyle.icon} type="Entypo" />
                <Icon name="star" style={Favstyle.icon} type="Entypo" />
                <Icon
                  name="star-outlined"
                  style={Favstyle.icon}
                  type="Entypo"
                />
                <Text style={Favstyle.text}>36 Reviews</Text>
              </View>
              <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                <View>
                  <Icon
                    name="location-pin"
                    style={{ color: "#07adb9", fontSize: 18 }}
                    type="Entypo"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={Favstyle.text}>
                    Within fantasy Nails & Spa ,313 al Green road ,London (3103)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
