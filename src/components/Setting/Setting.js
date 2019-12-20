import React, {Component} from 'react';
import SettingStyle from './SettingStyle';
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

export default class Setting extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }
  onValueChange = value => {
    this.setState({
      selected: value,
    });
  };

  render() {

    return (
      <View style={SettingStyle.View}>
        <Head title="Setting" sub="image@hotmail.com" setting={false}/>

       <View style={{alignItems:"center"}}>
       <View style={SettingStyle.head}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

            <Icon name='chat-processing'  style={{color:"#07adb9",paddingHorizontal:10}}  type="MaterialCommunityIcons" />
               <Text style={SettingStyle.H1}>Feedback and Support</Text>
              
            </View>
            <View style={{alignSelf:"center"}}>
            <Icon name='right'  style={SettingStyle.icon}  type="AntDesign" />
            </View>

            </View>
       <View style={SettingStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

            <Icon name='balance-scale'  style={{color:"#07adb9",paddingHorizontal:10}}  type="FontAwesome" />
               <Text style={SettingStyle.H1}>Legal</Text>
              
            </View>
            <View style={{alignSelf:"center"}}>
            <Icon name='right'  style={SettingStyle.icon}  type="AntDesign" />
            </View>

            </View>
       <View style={SettingStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

            <Icon name='globe-africa'  style={{color:"#07adb9",paddingHorizontal:10}}  type="FontAwesome5" />
               <Text style={SettingStyle.H1}>Country</Text>
              
            </View>
            <View style={{alignSelf:"center",flexDirection:"row"}}>
                <Text style={{color:"#07adb9",fontSize:16}}>Dubai</Text>
            <Icon name='right'  style={SettingStyle.icon}  type="AntDesign" />
            </View>

            </View>
       <View style={SettingStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

            <Icon name='logout'  style={{color:"#07adb9",paddingHorizontal:10}}  type="MaterialCommunityIcons" />
               <Text style={SettingStyle.H1}>logout</Text>
              
            </View>
            <View style={{alignSelf:"center"}}>
            <Icon name='right'  style={SettingStyle.icon}  type="AntDesign" />
            </View>

            </View>

       </View>
        
    </View>

    );
  }
}
