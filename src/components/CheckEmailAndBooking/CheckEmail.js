import React, {Component} from 'react';
import CheckStyle from './CheckStyle';
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

export default class CheckEmail extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }
  

  render() {

    return (
      <View style={CheckStyle.View}>
        <Head title="Check Email"  setting={true}/>
        <View style={{
            justifyContent:"center",
            alignItems:"center",
            flex:1
            
        }}>

                <Image
              style={CheckStyle.Logoimage}
              source={require('../../assets/images/5.png')}/>
              
            <Text style={{color:"#000"}}>Check you email!</Text>
                <View style={{
                    // alignSelf:"center",
                    paddingHorizontal:40
                }}>
                    <Text style={{textAlign:"center",color:"#b2b2b2",paddingVertical:10}}>
                      to import you booking tap the link in email
                      We sent to imanghalali@hotmail.com
                </Text>

                </View>
                <TouchableOpacity
                        style={CheckStyle.ButtonStyle}
                        onPress={() => {
                            
                        }}>
                        <Text style={CheckStyle.Txt}>Open Email App</Text>
                    </TouchableOpacity>
        </View>
    </View>

    );
  }
}
