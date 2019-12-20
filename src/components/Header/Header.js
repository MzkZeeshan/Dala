import React, {Component} from 'react';
import HeadStyle from './HeadStyle';
import {
  View,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
  FlatList,
  ImageBackground,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

export default class Head extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }


  render() {

    return (
        <View style={{flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#07adb9",
        paddingHorizontal:10,
        paddingVertical:20,
        alignContent:"center",
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        alignItems:"center"
  
        }}>
            <View style={{flexDirection:"row",alignSelf:"center"}}>
            <Icon name='chevron-left' style={{color:"#ffff"}} type="Entypo" />
                <Text style={{alignSelf:"center", color:"#fff"}}> Back</Text>
            </View>
            <View style={{alignSelf:"center",marginLeft:-20}}>
                <Text style={{alignSelf:"center", color:"#fff" }}>{this.props.title}</Text>
                {
               (this.props.sub)?
           
               <Text style={{alignSelf:"center", color:"#fff",fontSize:12 }}>{this.props.sub}</Text>
               :null
           } 
            </View>
            <View style={{}}>
           {
               (this.props.setting)?
            <Icon name='settings'  style={{color:"#ffff"}} />
               :null
           } 

            </View>
        </View>
    );
  }
}
