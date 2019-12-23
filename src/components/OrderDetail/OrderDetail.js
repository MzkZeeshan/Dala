import React, { Component } from "react";
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

export default class OrderDetail extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <View style={{flex:1}}>
        <Head title="Order Details" setting={false} />

        
        <View style={Styles.main}>
    
          <Text style={{color:"#b2b2b2"}}>30 min</Text>
          <Text style={{color:"#07adb9",fontSize:16}}>$31.50s</Text>
        </View>
        <View style={Styles.sub}>
            <Text style={{color:"#000",fontSize:18,padding:10}}>Payment</Text>
                <View style={Styles.head}>

                <View style={{ flexDirection: "row",}}>
                 
                  <Text style={{
                        color: '#07adb9',
                        alignSelf:"center",
                        paddingHorizontal:10
                  }}>Pay at venue </Text>
                </View>
                <View>
        
                 
                  <Text style={{ color: '#07adb9',
                             alignSelf:"center",
                     paddingHorizontal:10}}>
                   $31.50</Text>
                </View>
              </View>
              <View style={{
                 flexDirection:"row",
                 padding:5
              }}>    
                  <Text style={{
            borderBottomColor:"#07adb9",
            borderBottomWidth:1,color: '#07adb9',fontSize:18
                }}>Order information</Text>

              </View>

                    <View >
                        <View style={Styles.grayBox} >
                        <Text style={Styles.font}>Date Booked</Text>
                        <Text style={Styles.gray}>19 Sept 2019, 6:48</Text>
                        </View>
                    </View>
                    <View >
                        <View style={Styles.grayBox} >
                        <Text style={Styles.font}>Order reference numbers</Text>
                        <Text style={Styles.gray}>001100</Text>
                        </View>
                    </View>
                    <View >
                        <View style={Styles.grayBox} >
                        <Text style={Styles.font}>Booking source</Text>
                        <Text style={Styles.gray}>Dala3</Text>
                        </View>
                    </View>
                    <View >
                        <View style={Styles.grayBox} >
                        <Text style={Styles.font}>Contact email</Text>
                        <Text style={Styles.gray}>xyz@gmail.com</Text>
                        </View>
                    </View>
        </View>



      </View>
    );
  }
}


let Styles = StyleSheet.create({
    View: {
      flex:1,
      backgroundColor: '#fff',
      
    },
    main: {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:10,
        marginHorizontal:10,
        paddingVertical:10,
        marginVertical:10,
        borderBottomColor:"#b2b2b2",
        borderBottomWidth:1,
        
        
        
    },
    font: {fontSize:16},
    sub: {
        borderColor: '#fff',
        borderWidth: 0.5,
        backgroundColor: '#f0f0f0',
        width: '85%',
        borderRadius: 10,
        shadowRadius: 5,
        alignSelf:"center",
        shadowColor: "#000",
        elevation: 3,
        
    },
    gray: {
        alignSelf:"flex-end",
        color:"#07adb9",fontSize:16,
     
        
    },
    head: {
        width: '95%',
        alignSelf:"center",
        backgroundColor:'#e8f7f9',
        justifyContent:"space-between",
        flexDirection:"row",
        paddingVertical:10
  
    },
    grayBox: {
        justifyContent:"space-between",
        flexDirection:"row",
        paddingVertical:5,
        paddingHorizontal:10
    },
  });
  