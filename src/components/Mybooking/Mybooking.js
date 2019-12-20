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

export default class MyBooking extends Component {
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
        <ScrollView>
          <View>
            <Text style={BookStyle.h1}>Browse Treatments</Text>
          </View>
          <View>
            <Image
              style={BookStyle.bg}
              source={require("../../assets/images/booking1.png")}
            />
          </View>
          <View style={BookStyle.onimageView}>
            <Text style={{ paddingVertical: 5 }}>Aesthetics For Life</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={BookStyle.time}>10:00</Text>
              </View>

              <View
                style={{
                  paddingVertical: 5,
                  borderLeftWidth: 1,
                  borderLeftColor: "#f0f0f0",
                  paddingHorizontal: 10
                }}
              >
                <Text style={BookStyle.date}>Tuesday</Text>
                <Text style={BookStyle.date}>30 july 2019</Text>
              </View>
            </View>
          </View>

          <View style={BookStyle.wax}>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingTop: 10
              }}
            >
              <Image
                style={BookStyle.logo}
                source={require("../../assets/images/booking2.png")}
              />
              <View>
                <Text style={BookStyle.waxh1}>
                  Ladie's Waxing - Hollywood(Lycon Hot Wax)
                </Text>
                <Text style={BookStyle.waxh2}>
                  Within first available style /therapist (30min){" "}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 10
              }}
            >
              <Image
                style={BookStyle.logo}
                source={require("../../assets/images/booking3.png")}
              />
              <View>
                <Text style={BookStyle.waxh3}>Aesthetics For Life</Text>
              </View>
            </View>

            <View style={BookStyle.orange}>
              <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                <Image
                  style={BookStyle.logo}
                  source={require("../../assets/images/booking4.png")}
                />
                <Text style={BookStyle.orangeTxt}>To Pay at venue </Text>
              </View>
              <View>
                <Text style={BookStyle.orangeTxtH1}>$31.50</Text>
              </View>
            </View>
            <TouchableOpacity
              style={BookStyle.ButtonStyle}
              onPress={() => {
                // this.props.navigation.navigate('ShareLocation');
              }}
            >
              <Text style={BookStyle.Txt}>Manage Booking</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
