import React, { Component } from "react";
import { Container, Header, Content, Accordion, Icon } from "native-base";
import Allstyle from "./AllsearchStyle";
import Search from "../SearchHeader/SearchHeader";
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

export default class Allbookingsearch extends Component {
  onChange(name, val) {
    this.setState({ [name]: val });
  }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Search title="Favourites" setting={true} iconname="upload" />
        <View style={Allstyle.highMain}>
         
        <View style={Allstyle.card}>
            <View style={Allstyle.image}>
              <Image
                style={Allstyle.logo}
                source={require("../../assets/images/booking1.png")}
              />
            </View>
            <View style={Allstyle.next}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={Allstyle.h1}>L'Ecrin de la Feminite</Text>
                </View>
                <View style={Allstyle.heart}>
                  <Icon
                    name="heart"
                    style={{ color: "#ed1f92", fontSize: 16 }}
                    type="FontAwesome"
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" ,paddingHorizontal:5}}>
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
                <Icon name="star" style={Allstyle.icon} type="Entypo" />
                <Icon name="star" style={Allstyle.icon} type="Entypo" />
                <Icon name="star" style={Allstyle.icon} type="Entypo" />
                <Icon
                  name="star-outlined"
                  style={Allstyle.icon}
                  type="Entypo"
                />
                <Text style={Allstyle.text}>36 Reviews</Text>
              </View>
              <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                <View>
                  <Icon
                    name="location-pin"
                    style={{ color: "#07adb9", fontSize: 18 ,paddingHorizontal:5}}
                    type="Entypo"
                  />
                </View>
                <View style={{ flex: 1,paddingHorizontal:2 }}>
                  <Text style={Allstyle.text}>
                    Within fantasy Nails & Spa ,313 al Green road ,London (3103)
                  </Text>
                </View>
              </View>
            </View>
          </View>
       
        <View style={Allstyle.card1}>
            <View style={Allstyle.image}>
              <Image
                style={Allstyle.logo}
                source={require("../../assets/images/booking1.png")}
              />
            </View>
            <View style={Allstyle.next}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={Allstyle.h1}>L'Ecrin de la Feminite</Text>
                </View>
                <View style={Allstyle.heart}>
                  <Icon
                    name="heart"
                    style={{ color: "#ed1f92", fontSize: 16 }}
                    type="FontAwesome"
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" ,paddingHorizontal:5}}>
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
                <Icon name="star" style={Allstyle.icon} type="Entypo" />
                <Icon name="star" style={Allstyle.icon} type="Entypo" />
                <Icon name="star" style={Allstyle.icon} type="Entypo" />
                <Icon
                  name="star-outlined"
                  style={Allstyle.icon}
                  type="Entypo"
                />
                <Text style={Allstyle.text}>36 Reviews</Text>
              </View>
              <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                <View>
                  <Icon
                    name="location-pin"
                    style={{ color: "#07adb9", fontSize: 18 ,paddingHorizontal:5}}
                    type="Entypo"
                  />
                </View>
                <View style={{ flex: 1,paddingHorizontal:2 }}>
                  <Text style={Allstyle.text}>
                    Within fantasy Nails & Spa ,313 al Green road ,London (3103)
                  </Text>
                </View>
              </View>
            </View>
          </View>
       



        </View>

      
      </ScrollView>
    );
  }
}
