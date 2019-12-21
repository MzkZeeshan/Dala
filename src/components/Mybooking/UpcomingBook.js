import React, { Component } from "react";
import BookStyle from "./BookStyle";
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
import Head from "../Header/Header";
import { Icon } from "native-base";

export default class Upcomingbook extends Component {
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
    return (
      <View style={BookStyle.View}>
        <Head title="My Bookings" setting={true} />

        <View style={{ alignItems: "center" }}>
          <View style={BookStyle.head}>
            <View style={BookStyle.headsub}>
              <Icon
                name="calendar"
                style={{ color: "#07adb9" }}
                type="AntDesign"
              />
              <Text style={BookStyle.subtxt}>Bookings</Text>
            </View>
            <View style={BookStyle.headsub}>
              <Icon
                name="wallet"
                style={{ color: "#07adb9" }}
                type="AntDesign"
              />
              <Text style={BookStyle.subtxt}>Wallet</Text>
            </View>
          </View>
        </View>
       <View style={{flex:1,alignItems:"center"}}>
       <Image
                    style={BookStyle.bg1}
                    source={require("../../assets/images/upcomingbooking.png")}
                  />
            <Text style={{color:"#e3ecee",fontSize:18}}>No Upcoming Bookings</Text>
       </View>
      </View>
    );
  }
}