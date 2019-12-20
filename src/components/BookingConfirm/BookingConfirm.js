import React, { Component } from "react";
import BookconStyle from "./BookconStyle";
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
import {Icon} from "native-base";
import { Actions } from "react-native-router-flux";
import MapView from 'react-native-maps';

export default class BookingConfirm extends Component {
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
      <ScrollView style={{ flex: 1 ,backgroundColor:"#fff"}}>
        <ImageBackground
          style={BookconStyle.bg}
          resizeMode="stretch"
          source={require("../../assets/images/2.png")}
        >
          <View style={BookconStyle.viewBoxTop}>
            <View style={{
              position:"absolute",
              top:30,
              left:5
            }}>
              <TouchableOpacity>

                <View style={{ flexDirection: "row", alignSelf: "center" }}>
          
          <Icon name="chevron-left" style={{ color: "#ffff" }} type="Entypo" />
          <Text style={{ alignSelf: "center", color: "#fff",fontWeight:"bold" }}> Back</Text>
        
        </View>
              </TouchableOpacity>
            </View>
            <Image
              style={BookconStyle.Logoimage}
              source={require("../../assets/images/3.png")}
            />
          </View>
          <View style={BookconStyle.viewBoxTop}>
            <Image
              style={BookconStyle.Logoimage}
              source={require("../../assets/images/7.png")}
            />
          </View>
          <Text style={BookconStyle.h1}>Booking Confirmed </Text>
         
        </ImageBackground>
        <View style={BookconStyle.onimageView}>
            <Text style={{ paddingVertical: 5 }}>Aesthetics For Life</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={BookconStyle.time}>10:00</Text>
              </View>

              <View
                style={BookconStyle.timeView}
              >
                <Text style={BookconStyle.date}>Tuesday</Text>
                <Text style={BookconStyle.date}>30 july 2019</Text>
              </View>
            </View>
          </View>

          <View style={BookconStyle.sub}>
                            <View style={BookconStyle.align}>
                                <View style={{flexDirection:"column",flex:1,paddingVertical:10,paddingHorizontal:2}}>
                                <View >
                                <Text style={BookconStyle.H11}>Ladie's Waxing - My "Bare" lady Hollywood (Hotwax)</Text>
                                <View style={{flexDirection:"row"}}>
                                
                                <Text style={BookconStyle.H00}> With first available stylish/therapist (30min)</Text>

                                </View>
                    
                                </View>
                                </View>
                                <View style={{
                                    justifyContent:"center",
                                    borderTopRightRadius:10,
                                    borderBottomRightRadius:10,
                                }}>
                                <Icon name='right' style={{color:"#b2b2b2",fontSize:20,paddingVertical:10,paddingRight:5}} type="AntDesign" />
                                </View>
                            </View>
                        </View>

            <View style={BookconStyle.orange}>
                <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                  <Image
                    style={BookconStyle.logo}
                    source={require("../../assets/images/booking4.png")}
                  />
                  <Text style={BookconStyle.orangeTxt}>To Pay at venue </Text>
                </View>
                <View>
                  <Text style={BookconStyle.orangeTxtH1}>$31.50</Text>
                </View>
              </View>

              <View style={BookconStyle.align}>
              <TouchableOpacity
              style={BookconStyle.ButtonStyle1}
              onPress={() => {
                // this.props.navigation.navigate('ShareLocation');
              }}
            >
              <Text style={BookconStyle.Txt1}>Add to my calender</Text>
            </TouchableOpacity>
              <TouchableOpacity
              style={BookconStyle.ButtonStyle}
              onPress={() => {
                // this.props.navigation.navigate('ShareLocation');
              }}
            >
              <Text style={BookconStyle.Txt}>Manage Booking</Text>
            </TouchableOpacity>

            </View>
            <View style={BookconStyle.mapView}>
              
              <MapView
      //  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={BookconStyle.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
            </View>
            <View style={BookconStyle.align}>
              
            <View style={{paddingHorizontal:10}}>
            <Text style={{
              fontSize:22,color:"#000"
            }}>Aesthetics For Life</Text>
            <Text style={BookconStyle.H00}>at Skin life Aesthetics</Text>
            <Text style={BookconStyle.H00}>222xys Road</Text>
            <Text style={BookconStyle.time1}>Dubai,UAE</Text>
            </View>
            <View style={{paddingHorizontal:10}}>
            <Text style={BookconStyle.time1}>Direction</Text>
            <View style={{alignSelf:"flex-end"}}>
            <Text style={BookconStyle.H00}>3,407mi</Text>

            </View>
             
            </View>
           
            </View>
            <View style={BookconStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

            {/* <Icon name='balance-scale'  style={{color:"#07adb9",paddingHorizontal:10}}  type="FontAwesome" /> */}
               <Text style={BookconStyle.H}>View Venue</Text>
              
            </View>
            <View style={{alignSelf:"center"}}>
            <Icon name='right'  style={BookconStyle.icon}  type="AntDesign" />
            </View>

            </View>
            <View style={BookconStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

            {/* <Icon name='balance-scale'  style={{color:"#07adb9",paddingHorizontal:10}}  type="FontAwesome" /> */}
               <Text style={BookconStyle.H}>Call Venue</Text>
              
            </View>
            <View style={{alignSelf:"center",flexDirection:"row"}}>
               <Text style={BookconStyle.Txt1}>0776578586</Text>
            <Icon name='right'  style={BookconStyle.icon}  type="AntDesign" />
            </View>

            </View>
            <View style={BookconStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

            {/* <Icon name='balance-scale'  style={{color:"#07adb9",paddingHorizontal:10}}  type="FontAwesome" /> */}
               <Text style={BookconStyle.H}>Receip</Text>
              
            </View>
            <View style={{alignSelf:"center"}}>
            <Icon name='right'  style={BookconStyle.icon}  type="AntDesign" />
            </View>

            </View>


      </ScrollView>
    );
  }
}
