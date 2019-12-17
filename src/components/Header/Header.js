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
  
        }}>
            <View style={{flexDirection:"row",}}>
            <Icon name='arrow-back' />
                <Text style={{alignSelf:"center", color:"#fff"}}> Back</Text>
            </View>
            <View >
                <Text style={{alignSelf:"center", color:"#fff"}}>{this.props.title}</Text>
            </View>
            <View style={{}}>
           {
               (this.props.setting)?
            <Icon name='arrow-back' />
               :null
           } 

            </View>
        </View>
    );
  }
}
