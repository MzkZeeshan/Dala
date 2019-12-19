import React, {Component} from 'react';
import FeedStyle from './FeedStyle';
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

export default class Feedback extends Component {
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
      <View style={FeedStyle.View}>
        <Head title="Customer Feedback Via App"  setting={false}/>

       <View style={{alignItems:"center"}}>
       <View style={FeedStyle.head}>
            <View style={{flexDirection:"row",paddingHorizontal:10,alignSelf:"center"}}>

               <Text style={FeedStyle.H1}>TO   :</Text>
               <View style={FeedStyle.TextInputView}>
                                <TextInput underlineColorAndroid='transparent'
                                    style={FeedStyle.TextInputStyle}
                                    placeholderTextColor="#b2b2b2"
                                    onChangeText={this.onChange.bind(this, 'email')}
                                    placeholder="Phone number"
                                />
                            </View>
            </View>
            <View style={{alignSelf:"center",backgroundColor:"#07adb9",borderRadius:5,marginRight:5}}>
            <Icon name='plus'  style={{color:"#fff",fontSize:18,padding:5}}  type="AntDesign" />
            </View>

            </View>
       <View style={FeedStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

            <Icon name='balance-scale'  style={{color:"#07adb9",paddingHorizontal:10}}  type="FontAwesome" />
               <Text style={FeedStyle.H1}>Legal</Text>
              
            </View>
            <View style={{alignSelf:"center"}}>
            <Icon name='right'  style={FeedStyle.icon}  type="AntDesign" />
            </View>

            </View>
       <View style={FeedStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

            <Icon name='globe-africa'  style={{color:"#07adb9",paddingHorizontal:10}}  type="FontAwesome5" />
               <Text style={FeedStyle.H1}>Country</Text>
              
            </View>
            <View style={{alignSelf:"center",flexDirection:"row"}}>
                <Text style={{color:"#07adb9",fontSize:16}}>Dubai</Text>
            <Icon name='right'  style={FeedStyle.icon}  type="AntDesign" />
            </View>

            </View>
       <View style={FeedStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

            <Icon name='logout'  style={{color:"#07adb9",paddingHorizontal:10}}  type="MaterialCommunityIcons" />
               <Text style={FeedStyle.H1}>logout</Text>
              
            </View>
            <View style={{alignSelf:"center"}}>
            <Icon name='right'  style={FeedStyle.icon}  type="AntDesign" />
            </View>

            </View>

       </View>
        
    </View>

    );
  }
}
