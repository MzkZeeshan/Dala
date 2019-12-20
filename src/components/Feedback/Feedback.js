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
  

  render() {

    return (
      <View style={FeedStyle.View}>
        <Head title="Customer Feedback Via App"  setting={false}/>

       <View style={{alignItems:"center"}}>
      
               <View style={FeedStyle.TextInputView}>
               <Text style={FeedStyle.H1}>TO   :</Text>
                                <TextInput underlineColorAndroid='transparent'
                                    style={FeedStyle.TextInputStyle}
                                />
              <View style={{alignSelf:"center",backgroundColor:"#07adb9",borderRadius:5,marginRight:5}}>
               <Icon name='plus'  style={{color:"#fff",fontSize:18,padding:5}}  type="AntDesign" />
            </View>
         

            </View>
               <View style={FeedStyle.TextInputView1}>
               <Text style={FeedStyle.H1}>cc/Bcc   :</Text>
                                <TextInput underlineColorAndroid='transparent'
                                    style={FeedStyle.TextInputStyle}
                                />
            
            </View>
     
               <View style={FeedStyle.TextInputView2}>
               <Text style={FeedStyle.H1}>Subject   :</Text>
                                <TextInput underlineColorAndroid='transparent'
                                    style={FeedStyle.TextInputStyle1}
                                    // editable
                                    // maxLength={400}
                                />
            
            </View>
     

       </View>
            <View>
            
            <Text style={{color:"#07adb9",fontSize:14,paddingHorizontal:25}}>Sent from iphone</Text>
            </View>
            <TouchableOpacity
                    style={FeedStyle.ButtonStyle}
                    onPress={() => {
                     
                    }}>
                    <Text style={FeedStyle.Txt}>Send</Text>
                  </TouchableOpacity>
        
    </View>

    );
  }
}
