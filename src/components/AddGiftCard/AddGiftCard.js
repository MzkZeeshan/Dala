import React, { Component } from "react";
import AddStyle from "./AddStyle";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  CheckBox,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Icon, Content } from "native-base";
import Routeskey from "../../navigation/routeskey";
import { Actions } from "react-native-router-flux";
import {Back} from "../Header/Header";

export default class AddCardGift extends Component {
  constructor() {
    super();
    this.state = {
      selected: "key1"
    };
  }

  onChange(name, val) {
    this.setState({ [name]: val });
  }
  render() {
    return (
      <ScrollView style={{backgroundColor:"#fff"}}>
        <ImageBackground
          style={{ flex: 1 }}
          resizeMode="cover"
          // resizeMode="contain"
          source={require("../../assets/images/fix.png")}
        >
          <TouchableOpacity
            onPress={() => {
              // this.props.navigation.navigate('Turnonnoti');
            }}
          >
          </TouchableOpacity>
          <View style={AddStyle.viewBoxTop}>
            <Image
              style={AddStyle.Logoimage}
              source={require("../../assets/images/3.png")}
            />
          </View>
              {/* back button */}
              <Back/>
              {/* back button */}
          <View style={AddStyle.View}>
            <View style={AddStyle.Main}>
              <Text style={AddStyle.H1}>Add Gift Cards or Promo Code </Text>
              <View>
              
              <Text style={AddStyle.textbom}>
                  Gift Code or Promo Code
                  </Text>
                <View style={AddStyle.TextInputView}>
                
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={AddStyle.TextInputStyle}
                    maxLength={30}
                    // placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#b2b2b2"
                    onChangeText={this.onChange.bind(this, "email")}
                    // value={address}
                  />
               
                </View>
              </View>

              <View style={{  paddingHorizontal: 20 }}>
                
                <View>
                  <Text style={AddStyle.textbom}>
                  You can find the Gift Code in your mail box or in your
                  Gift box
                  </Text>
                </View>
                <View>
                  <Text style={AddStyle.textbom}>
                  You can find the Gift Code in your mail box or in your
                  Gift box
                  </Text>
                </View>
                <View>
                  <Text style={AddStyle.textbom}>
                  The codes are not case-sensitive
                  </Text>
                </View>
              </View>


              <TouchableOpacity
                style={AddStyle.ButtonStyle}
                onPress={() => {
                  
                }}
              >

                <Text style={AddStyle.Txt}>Add</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={AddStyle.ButtonStylefb}
              onPress={() => {
                // this.props.navigation.navigate('Turnonnoti');
              }}
            >
                <Icon name="facebook-square" style={{ color: "#ffff" ,paddingHorizontal:20,  alignSelf: 'flex-start',}} type="AntDesign" />
              <Text style={AddStyle.Txt}>Continue With Facebook</Text>
            </TouchableOpacity>
          </View>
         
        </ImageBackground>
      </ScrollView>
    );
  }
}
