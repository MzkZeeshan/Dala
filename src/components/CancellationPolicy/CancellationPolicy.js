import React, { Component } from "react";
import CancelStyle from "./CancelPolicyStyle";
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

export default class CancellationPolicy extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <View style={{  flex:1,
        backgroundColor: '#fff',}}>
        <Head title="Cancellation Policy" setting={false} />

        <View style={{ alignItems: "center" }}>
       
       <View style={{flex:1,alignItems:"center"}}>
       <Image
                    style={CancelStyle.bg1}
                    source={require("../../assets/images/cancellation.png")}
                  />
            <Text style={{color:"#000",fontSize:18,paddingVertical:10}}>Reschedule Policy</Text>
            <Text style={{color:"#b2b2b2",fontSize:14,textAlign:"center",paddingHorizontal:10}}>No vaild promos rigth now - your
             valid promos will appear here.</Text>
            <Text style={{color:"#000",fontSize:18,paddingVertical:10}}>Cancellation Policy</Text>
            <Text style={{color:"#b2b2b2",fontSize:14,textAlign:"center",paddingHorizontal:10}}>
              We are sorry but We can't give you a refund if you cancel
              your booking because it's too close to the time of your appointment.
              </Text>
       </View>
      </View>
      </View>
    );
  }
}
