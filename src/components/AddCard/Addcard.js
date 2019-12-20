import React, { Component } from "react";
import LoginStyle from "./AddCardStyle";
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
import Constant from "../../constant/Constant";
export default class Addcard extends Component {
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
      <ScrollView>
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
            <Text> </Text>
          </TouchableOpacity>
          <View style={LoginStyle.viewBoxTop}>
            <Image
              style={LoginStyle.Logoimage}
              source={require("../../assets/images/3.png")}
            />
          </View>

          <View style={LoginStyle.View}>
            <View style={LoginStyle.Main}>
              <Text style={LoginStyle.H1}>Add Card</Text>
              <View>
              <View>
                  <Text>Card Number</Text>
                  <View style={LoginStyle.Box}>
                    <View style={LoginStyle.TextInputView}>
                      <TextInput
                        underlineColorAndroid="transparent"
                        style={LoginStyle.TextInputStyle}
                        // placeholder="Email"
                        placeholderTextColor="#b2b2b2"
                        onChangeText={this.onChange.bind(this, "email")}
                        // value={address}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        alignItems: "center",
                        paddingLeft: 10
                      }}
                    >
                      <Icon
                        style={LoginStyle.Icon2}
                        name="account-box"
                        type="MaterialCommunityIcons"
                      />
                      <Text style={{ fontSize: 9, color: Constant.COLOR }}>
                        Scan Card
                      </Text>
                    </View>
                  </View>
                </View>










                <View>
                  <Text>Cardholder's name</Text>
                  <View style={LoginStyle.Box}>
                    <View style={LoginStyle.TextInputView2}>
                      <TextInput
                        underlineColorAndroid="transparent"
                        style={LoginStyle.TextInputStyle}
                        // placeholder="Email"
                        placeholderTextColor="#b2b2b2"
                        onChangeText={this.onChange.bind(this, "email")}
                        // value={address}
                      />
                    </View>
            
                  </View>
                </View>

<View style={{flexDirection:"row",width:"92%"}}>
                <View>
                  <Text>Expires</Text>
                  <View style={LoginStyle.Box}>
                    <View style={LoginStyle.TextInputViewhalf}>
                      <TextInput
                        underlineColorAndroid="transparent"
                        style={LoginStyle.TextInputStyle}
                        // placeholder="Email"
                        placeholderTextColor="#b2b2b2"
                        onChangeText={this.onChange.bind(this, "email")}
                        // value={address}
                      />
                    </View>
            
                  </View>
                </View>



                <View>
                  <Text>CVV</Text>
                  <View style={LoginStyle.Box}>
                    <View style={LoginStyle.TextInputViewhalf}>
                      <TextInput
                        underlineColorAndroid="transparent"
                        style={LoginStyle.TextInputStyle}
                        // placeholder="Email"
                        placeholderTextColor="#b2b2b2"
                        onChangeText={this.onChange.bind(this, "email")}
                        // value={address}
                      />
                    </View>
            
                  </View>
                </View>


                </View>




                



              
              </View>
           
              <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
                <CheckBox
                  value={this.state.checkml}
                  onValueChange={() =>
                    this.setState({ checkml: !this.state.checkml })
                  }
                />
                <View>
                  <Text style={LoginStyle.textbom}>
                    Send me emails form Dala3 with the latest offers & beauty
                    news.
                  </Text>
                </View>
              </View>

             

              <TouchableOpacity
                style={LoginStyle.ButtonStyle}
                onPress={() => {
                  // this.props.navigation.navigate("Personal");
                  Actions[Routeskey.PERSONAL_INFO]();
                }}
              >
                <Text style={LoginStyle.Txt}>Add Card</Text>
              </TouchableOpacity>
            </View>

   
          </View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 15,
              alignSelf: "center",
              width: "90%",
              height:200
            }}
          >
       
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}
