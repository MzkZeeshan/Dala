import React, {Component} from 'react';
import paymentStyle from './paymentStyle';
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

export default class Paymentoption extends Component {
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
      <View style={paymentStyle.View}>
        <Head title="Payment Option"  setting={false}/>

       <View style={{alignItems:"center"}}>
       <View style={paymentStyle.head}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>
                <View>

                     <Image
                style={paymentStyle.logo}
                source={require("../../assets/images/card.png")}
              />
            
                 </View>
                 <View>
                
                   <Text style={paymentStyle.H1}>Add New Card</Text>
               <Text style={{fontSize:10}}>Visa, MasterCard  & Amex</Text>
                </View>
              
            </View>
            <View style={{alignSelf:"center"}}>
            <Icon name='right'  style={paymentStyle.icon}  type="AntDesign" />
            </View>

            </View>
                  <View style={paymentStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

            <Image
                style={paymentStyle.logo}
                source={require("../../assets/images/paypal.png")}
              />
               <Text style={paymentStyle.H1}>Pay with Paypal</Text>
              
            </View>
        

            </View>
       <View style={paymentStyle.head1}>
            <View style={{flexDirection:"row",paddingHorizontal:10}}>

            <Image
                style={paymentStyle.logo}
                source={require("../../assets/images/payatvanue.png")}
              />
               <Text style={paymentStyle.H1}>Pay at venue</Text>
              
            </View>
         

            </View>
     

       </View>
        
    </View>

    );
  }
}
