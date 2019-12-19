import React, { Component } from "react";
import { Container, Header, Content, Accordion,Icon } from "native-base";
import Waxstyle from './WaxStyle';
import Head from "../Header/Header";
import RoutesKey from "../../navigation/routeskey"
import {Actions} from "react-native-router-flux"
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,ImageBackground,
    TouchableOpacity,
  } from 'react-native';
import Routeskey from "../../navigation/routeskey";

export default class WaxDetail extends Component {
  render() {
    return (
            <ScrollView style={{flex:1}}>
              <ImageBackground
          style={Waxstyle.bg}
          resizeMode="stretch"
          source={require('../../assets/images/booking1.png')}>
            <View style={Waxstyle.align} >
          
          <TouchableOpacity>

            <View style={{flexDirection:"row",margin:10}}>
            <Icon name='chevron-left' style={{color:"#ffff",}} type="Entypo" />
                <Text style={{alignSelf:"center", color:"#fff",fontSize:18}}>Back</Text>
            </View>
          </TouchableOpacity>
           
                
                
                <View  style={{flexDirection:"row",margin:5}}>

                        <View style={Waxstyle.heart}> 
                         <Icon name='upload' style={{color:"#fff",fontSize:16}} type="AntDesign" />
                     </View>

                        <View style={Waxstyle.heart}> 
                         <Icon name='heart' style={{color:"#ed1f92",fontSize:16}} type="FontAwesome" />
                     </View>
                </View>
            </View>
         
        </ImageBackground>
            <View style={Waxstyle.highMain}>

                    <View style={Waxstyle.high}>
                        <View style={Waxstyle.align}>
                            <View style={{flex:1}}>
                        <Text style={Waxstyle.H1}>Wax & Beauty  </Text>
                        <View style={{flexDirection:"row",}}>

                        <Text style={{color:"#f89a00",fontSize:14,alignSelf:"center",paddingHorizontal:5}}>4.8</Text>
                        <Icon name='star' style={Waxstyle.icon} type="Entypo" />
                        <Icon name='star'  style={Waxstyle.icon}  type="Entypo" />
                        <Icon name='star' style={Waxstyle.icon}  type="Entypo" />
                        <Icon name='star-outlined'  style={Waxstyle.icon}  type="Entypo" />
                        <Text style={Waxstyle.text}>36 Reviews</Text>

                        </View>
                        <View style={{flexDirection:"row",paddingVertical:10}}>

                        <View > 
                        <Icon name='location-pin' style={{color:"#07adb9",fontSize:18}} type="Entypo" />

                        </View>
                        <View  style={{flex:1}}> 
                        <Text style={Waxstyle.text}>Within s fantasy Nails & Spa ,313 al Green road ,London</Text>

                        </View>
                        </View>

                            </View>
                            <View>
                            <View style={Waxstyle.offpeak}>
                            <Text style={Waxstyle.offpeaktxt}>% off - Peak Discounts</Text>

                           </View>
                           <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                           <TouchableOpacity onPress={()=>Actions[Routeskey.WAX_BUEATY]()}>
                           <View style={Waxstyle.detail}>
                           <Text style={Waxstyle.detailtxt}>Detail</Text>
                           </View>
                           </TouchableOpacity>
                           </View>
                            </View>
                        </View>
                    </View>
                    {/* sub */}
                    <View style={Waxstyle.MainCenter}>
                        <Text style={Waxstyle.H1}>Results for ladies' waxing </Text>

                    <View style={Waxstyle.sub}>
                        <View style={Waxstyle.align}>
                            <View style={{flexDirection:"column",flex:1,paddingVertical:10,paddingHorizontal:2}}>
                            <View >
                             <Text style={Waxstyle.H11}>Ladie's Waxing - My "Bare" lady Hollywood (Hotwax)</Text>
                             <View style={{flexDirection:"row"}}>
                             <Text style={Waxstyle.H0}>form 300.60 ADE</Text>
                             <Text style={Waxstyle.H00}> Form 1 hour 30 min</Text>

                             </View>
                  

                            </View>
                            </View>
                            <View style={{backgroundColor:"#f0f0f0",
                            justifyContent:"center",
                            paddingHorizontal:2,
                            borderTopRightRadius:10,
                            borderBottomRightRadius:10,
                            }}>
                            <Icon name='plus' style={{color:"#b2b2b2",fontSize:20,paddingVertical:10,}} type="AntDesign" />
                            </View>
                        </View>
                    </View>
                    <View style={Waxstyle.sub}>
                        <View style={Waxstyle.align}>
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
                            <View style={Waxstyle.align}>
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

                </View>
                    </View>
                    <View>
                    <View style={Waxstyle.scroll}>
                        <Text style={Waxstyle.H1}>Full Menu</Text>

                    </View>
            </View>
                   
            </View>
                    <View style={{marginTop:-20,width:"80%",alignSelf:"center"}}>
                <ScrollView horizontal={true} style={{marginBottom:2}} >
                   <TouchableOpacity>
                       <View style={{
                            backgroundColor:"#fff",
                            alignItems:"center",
                            borderRadius:5,
                            paddingHorizontal:10,
                            marginHorizontal:10,
                            elevation:2,
                            borderWidth:2,
                            borderColor:""                            

                       }}>
                            <Icon name='plus' style={{color:"#07abd9",fontSize:20,paddingVertical:10,}} type="AntDesign" />
                        <Text style={Waxstyle.H1}>All</Text>
                       </View>
                   </TouchableOpacity>

                </ScrollView>
                    </View>
                    <View style={Waxstyle.high1}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",}}>
                        <Text style={Waxstyle.blue}>Highligths</Text>
                        <Text style={Waxstyle.H2}>(04)</Text>

                            </View>
                            <View>
                            <Icon name='up' style={{color:"#b2b2b2",fontSize:20,paddingVertical:10,paddingHorizontal:10,}} type="AntDesign" />
                            </View>
                        </View>
                    </View>
                    <View style={Waxstyle.high1}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",}}>
                        <Text style={Waxstyle.blue}>Highligths</Text>
                        <Text style={Waxstyle.H2}>(04)</Text>

                            </View>
                            <View>
                            <Icon name='up' style={{color:"#b2b2b2",fontSize:20,paddingVertical:10,paddingHorizontal:10,}} type="AntDesign" />
                            </View>
                        </View>
                    </View>
         </ScrollView>
    );
  }
}