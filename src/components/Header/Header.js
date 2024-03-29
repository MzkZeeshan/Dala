import React, { Component } from "react";
import HeadStyle from "./HeadStyle";
import {
  View,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
  FlatList,
  ImageBackground
} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text
} from "native-base";
import { Actions } from "react-native-router-flux";

export default class Head extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#07adb9",
          paddingHorizontal: 10,
          paddingVertical: 20,
          alignContent: "center",
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          alignItems: "center"
        }}
      >
         <TouchableOpacity onPress={()=>Actions.pop()}>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
         
          <Icon name="chevron-left" style={{ color: "#ffff" }} type="Entypo" />
          <Text style={{ alignSelf: "center", color: "#fff" }}> Back</Text>
        
        </View>
        </TouchableOpacity>
        <View style={{ alignSelf: "center", marginLeft: -20 }}>
          <Text style={{ alignSelf: "center", color: "#fff" }}>
            {this.props.title}
          </Text>
          {this.props.sub ? (
            <Text style={{ alignSelf: "center", color: "#fff", fontSize: 12 }}>
              {this.props.sub}
            </Text>
          ) : null}
        </View>
        <View style={{}}>
          {this.props.setting ? (
            <Icon name="settings" style={{ color: "#ffff" }} />
          ) : null}
        </View>
      </View>
    );
  }
}
export class Back extends Component {
  constructor() {
    super();

  }

  render() {
    return (
   
         <View style={{position:"absolute", top:10, left:5}}>
         <TouchableOpacity>
           <View style={{ flexDirection: "row", alignSelf: "center" }}>
         <Icon name="chevron-left" style={{ color: "#ffff" }} type="Entypo" />
         <Text style={{ alignSelf: "center", color: "#fff",fontWeight:"bold" }}> Back</Text>
         </View>
         </TouchableOpacity>
   </View>

    );
  }
}
