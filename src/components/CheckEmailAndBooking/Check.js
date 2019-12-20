import React, {Component} from 'react';
import CheckStyle from './CheckStyle';
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
  ImageBackground,
} from 'react-native';
import Head from "../Header/Header";
import {Icon} from 'native-base';

export default class CheckBooking extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }
  

  render() {

    return (
      <View style={CheckStyle.View}>
        <Head title="MY Booking"  setting={true}/>
        <View style={{
            justifyContent:"center",
            alignItems:"center",
            flex:1
            
        }}>

                <Image
              style={CheckStyle.Logoimage}
              source={require('../../assets/images/mybooking.png')}/>
              
            <Text style={{color:"#000"}}>Your Booing will appear here</Text>
                <View style={{
                    // alignSelf:"center",
                    paddingHorizontal:40
                }}>
                    <Text style={{textAlign:"center",color:"#b2b2b2",paddingVertical:10}}>if you are looking for the booking you've made
                before you can import and manage here
                </Text>

                </View>
                <TouchableOpacity
                        style={CheckStyle.ButtonStyle}
                        onPress={() => {
                            
                        }}>
                        <Text style={CheckStyle.Txt}>Import My Booking</Text>
                    </TouchableOpacity>
        </View>
    </View>

    );
  }
}
