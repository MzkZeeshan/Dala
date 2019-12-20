import React, {Component} from 'react';
import LegalStyle from './LegalStyle';
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

export default class Legal extends Component {
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
      <View style={LegalStyle.View}>
        <Head title="Legal"  setting={false}/>

       <View style={{alignItems:"center"}}>
       <View style={LegalStyle.head}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

               <Text style={LegalStyle.H1}>Booking terms and condition</Text>
              
            </View>
            <View style={{alignSelf:"center"}}>
            <Icon name='right'  style={LegalStyle.icon}  type="AntDesign" />
            </View>

            </View>
              <View style={LegalStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

            {/* <Icon name='balance-scale'  style={{color:"#07adb9",paddingHorizontal:10}}  type="FontAwesome" /> */}
               <Text style={LegalStyle.H1}>Dala3 Term and Policies</Text>
              
            </View>
            <View style={{alignSelf:"center"}}>
            <Icon name='right'  style={LegalStyle.icon}  type="AntDesign" />
            </View>

            </View>
       <View style={LegalStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

               <Text style={LegalStyle.H1}>Privacy and Cookie policy</Text>
              
            </View>
            <View style={{alignSelf:"center",flexDirection:"row"}}>
            <Icon name='right'  style={LegalStyle.icon}  type="AntDesign" />
            </View>

            </View>
       <View style={LegalStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

               <Text style={LegalStyle.H1}>Dala3 & partners terms of busniess</Text>
              
            </View>
            <View style={{alignSelf:"center",flexDirection:"row"}}>
            <Icon name='right'  style={LegalStyle.icon}  type="AntDesign" />
            </View>

            </View>
              <View style={LegalStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

               <Text style={LegalStyle.H1}>User Generated Content Policy</Text>
              
            </View>
            <View style={{alignSelf:"center"}}>
            <Icon name='right'  style={LegalStyle.icon}  type="AntDesign" />
            </View>

            </View>

       </View>
        
    </View>

    );
  }
}
