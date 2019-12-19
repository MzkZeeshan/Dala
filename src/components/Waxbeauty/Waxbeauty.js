import React, { Component } from "react";
import { Container, Header, Content, Accordion,Icon } from "native-base";
import Waxstyle from './waxStyle';
import Head from "../Header/Header";
import RoutesKey from "../../navigation/routeskey"
import {Actions} from "react-native-router-flux"

import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';

export default class Waxbeauty extends Component {
  render() {
    return (
            <View style={{flex:1}}>
          <Head title="Wax & Beauty" setting={true} iconname="upload"/>
            <View style={Waxstyle.highMain}>

                    <View style={Waxstyle.high}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",}}>
                        <Text style={Waxstyle.H1}>Highligths</Text>
                        <Text style={Waxstyle.H2}>(04)</Text>

                            </View>
                            <View>
                            <Icon name='up' style={{color:"#b2b2b2",fontSize:20,paddingVertical:10,paddingHorizontal:10,}} type="AntDesign" />
                            </View>
                        </View>
                    </View>
                    {/* sub */}
                    <View>

                    <View style={Waxstyle.sub}>
                        <View style={Waxstyle.subsub}>
                            <View style={{flexDirection:"column",flex:1,paddingVertical:10,paddingHorizontal:2}}>
                            <View >
                             <Text style={Waxstyle.H11}>Ladie's Waxing - My "Bare" lady Hollywood (Hotwax)</Text>
                             <View style={{flexDirection:"row"}}>
                             <Text style={Waxstyle.H0}>form 300.60 ADE</Text>
                             <Text style={Waxstyle.H00}> Form 1 hour 30 min</Text>

                             </View>
                  

                            </View>
                            </View>
                            <View style={{backgroundColor:"#07adb9",
                            justifyContent:"center",
                            paddingHorizontal:2,
                            borderTopRightRadius:10,
                            borderBottomRightRadius:10,
                            }}>
                            <Icon name='check' style={{color:"#fff",fontSize:20,paddingVertical:10,}} type="AntDesign" />
                            </View>
                        </View>
                    </View>

                    <View style={Waxstyle.subMain}>
                        
                        <View style={Waxstyle.sub}>
                            <View style={Waxstyle.subsub}>
                                <View style={{flexDirection:"column",flex:1,paddingVertical:10,paddingHorizontal:2}}>
                                <View >
                                <Text style={Waxstyle.H11}>Ladie's Waxing - My "Bare" lady Hollywood (Hotwax)</Text>
                                <View style={{flexDirection:"row"}}>
                                <Text style={Waxstyle.H0}>form 300.60 ADE</Text>
                                <Text style={Waxstyle.H00}> Form 1 hour 30 min</Text>

                                </View>
                    
                                </View>
                                </View>
                                <View style={{
                                    justifyContent:"center",
                                    borderTopRightRadius:10,
                                    borderBottomRightRadius:10,
                                }}>
                                <Icon name='down' style={{color:"#b2b2b2",fontSize:20,paddingVertical:10,paddingRight:5}} type="AntDesign" />
                                </View>
                            </View>
                        </View>
                                {/* sds */}
                                <View style={Waxstyle.sub1}>
                            <View style={Waxstyle.subsub}>
                                <View style={{flexDirection:"column",flex:1,paddingVertical:10,paddingHorizontal:2}}>
                                <View >
                                <Text style={Waxstyle.Hblack}>Chin</Text>
                                <Text style={Waxstyle.H00}>30 min</Text>
                                
                    
                                </View>
                                </View>
                                <View style={{alignSelf:"center"}}>
                             
                                <Text style={Waxstyle.H0}>300.60 ADE</Text>
                                <Text style={Waxstyle.H00}>from 40.0 ADE</Text>
                                </View>
                                <View style={{
                                    justifyContent:"center",
                                    borderTopRightRadius:10,
                                    borderBottomRightRadius:10,
                                    elevation:0.7,
                                    margin:2,
                                    padding:1,
                                }}>
                                    
                                <Icon name='plus' style={{color:"#b2b2b2",fontSize:20,paddingVertical:10,paddingRight:5}} type="AntDesign" />
                                </View>
                            </View>
                        </View>


                </View>




                    </View>
                        
            </View>
         </View>
    );
  }
}