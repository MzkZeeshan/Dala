import React, { Component } from "react";
import CheckoutStyle from "./checkoutStyle";
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

import {Back} from "../../components/Header/Header";
import {Icon} from "native-base";
import { Actions } from "react-native-router-flux";

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      selected: "key1"
    };
  }
 

  render() {
    // const { navigate } = this.props.navigation;

    return (
      <ScrollView style={{ flex: 1 ,backgroundColor:"#fff"}}>
        <ImageBackground
          style={CheckoutStyle.bg}
          resizeMode="stretch"
          source={require("../../assets/images/2.png")}
        >
        
        <Back/>

          <Text style={CheckoutStyle.h1}>Check Out</Text>
          
         
        </ImageBackground>
        <View style={CheckoutStyle.onimageView}>
            <Text style={{ paddingVertical: 5 }}>Aesthetics For Life</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={CheckoutStyle.time}>10:00</Text>
              </View>

              <View
                style={CheckoutStyle.timeView}
              >
                <Text style={CheckoutStyle.date}>Tuesday</Text>
                <Text style={CheckoutStyle.date}>30 july 2019</Text>
              </View>
            </View>
          </View>

          <View style={CheckoutStyle.sub}>
                            
                                <View style={{flexDirection:"column",flex:1,paddingVertical:10,paddingHorizontal:2}}>
                                <View >
                                <Text style={CheckoutStyle.H11}>Ladie's Waxing - My "Bare" lady Hollywood (Hotwax)</Text>
                                <View style={{flexDirection:"row"}}>
                                
                                <Text style={CheckoutStyle.H00}> With first available stylish/therapist (30min)</Text>

                                </View>
                    
                                </View>
                                </View>
                                
                        </View>

            <View style={CheckoutStyle.blue}>
                <View style={{ flexDirection: "row",}}>
                 
                  <Text style={CheckoutStyle.Txt1}>30 min </Text>
                </View>
                <View>
        
                  <Text style={CheckoutStyle.Txt2}>$46</Text>
                  <Text style={CheckoutStyle.Txt1}>$31.50</Text>
                </View>
              </View>

              <View style={CheckoutStyle.head1}>
              <View style={{flexDirection:"row",paddingHorizontal:10}}>

              <Image
                  style={CheckoutStyle.logo}
                  source={require("../../assets/images/card.png")}
                />
                <Text style={CheckoutStyle.H1}>Pay at venue</Text>
                
              </View>
              </View>

              <View style={CheckoutStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

               <Text style={CheckoutStyle.H1}>Choose Payment Option</Text>
              
            </View>
            <View style={{alignSelf:"center",flexDirection:"row"}}>
            <Icon name='right'  style={CheckoutStyle.icon}  type="AntDesign" />
            </View>

            </View>
           

              <View style={CheckoutStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

               <Text style={CheckoutStyle.H1}>Add your promo or gift code</Text>
              
            </View>
            <View style={{alignSelf:"center",flexDirection:"row"}}>
            <Icon name='right'  style={CheckoutStyle.icon}  type="AntDesign" />
            </View>

            </View>
              <View style={CheckoutStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

               <Text style={CheckoutStyle.H1}>Cancellation Policy</Text>
              
            </View>
            <View style={{alignSelf:"center",flexDirection:"row"}}>
            <Icon name='right'  style={CheckoutStyle.icon}  type="AntDesign" />
            </View>

            </View>


            <View >
              <View style={{alignSelf:"flex-end",flexDirection:"row",alignItems:"center"}}>

              <Text style={CheckoutStyle.H000}>Total to pays</Text>
                    <Text style={CheckoutStyle.time}>$31.50</Text>
              </View>

                    </View>
           
            <TouchableOpacity
                    style={CheckoutStyle.ButtonStyle}
                    onPress={() => {
                     
                    }}>
                    <Text style={CheckoutStyle.Txt}>Pay Now</Text>
                  </TouchableOpacity>
                    

                  <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              alignSelf: "center",
              width: "90%"
            }}
          >
            <Text style={{textAlign:"center"}}>
              By log in you agree to Dala3 Activities Authority
              <Text style={CheckoutStyle.end}> Condition of</Text> use and{" "}
              <Text style={CheckoutStyle.end}>Privacy Policy</Text>
            </Text>
          </View>
      </ScrollView>
    );
  }
}
