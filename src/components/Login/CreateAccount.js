import React, { Component } from "react";
import LoginStyle from "./LoginStyle";
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

export default class CreateAccount extends Component {
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
              {/* back button */}
              <Back/>
              {/* back button */}
          <View style={LoginStyle.View}>
            <View style={LoginStyle.Main}>
              <Text style={LoginStyle.H1}>Create your account</Text>
              <View>
                <View style={LoginStyle.TextInputView}>
                  <Icon
                    style={LoginStyle.Icon}
                    name="email-box"
                    type="MaterialCommunityIcons"
                  />
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={LoginStyle.TextInputStyle}
                    placeholder="Email"
                    placeholderTextColor="#b2b2b2"
                    onChangeText={this.onChange.bind(this, "email")}
                    // value={address}
                  />
                </View>
                <View style={LoginStyle.TextInputView}>
                  {/* <Icon style={LoginStyle.Icon} name="user-box" type="MaterialCommunityIcons" /> */}
                  <Icon
                    style={LoginStyle.Icon}
                    name="account-box"
                    type="MaterialCommunityIcons"
                  />
                  {/* <View style={LoginStyle.Iconview}>
                  </View> */}
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={LoginStyle.TextInputStyle}
                    placeholder="Full name"
                    placeholderTextColor="#b2b2b2"
                    onChangeText={this.onChange.bind(this, "Full name")}
                    // value={address}
                  />
                </View>

                <View style={LoginStyle.TextInputView}>
                  <Icon
                    style={LoginStyle.Icon}
                    name="lock"
                    type="MaterialCommunityIcons"
                  />
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={LoginStyle.TextInputStyle}
                    maxLength={30}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#b2b2b2"
                    onChangeText={this.onChange.bind(this, "email")}
                    // value={address}
                  />
                  {/* <Icon style={LoginStyle.Icon} name="eye-outline" type="MaterialCommunityIcons" /> */}
                  <Icon
                    style={LoginStyle.Icon}
                    name="eye-off-outline"
                    type="MaterialCommunityIcons"
                  />
                </View>
              </View>
              <Text style={LoginStyle.textbottom}>
                Please enter atleast 8 charactars
              </Text>
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

              <View style={{ paddingHorizontal: 1 }}>
                <Text style={LoginStyle.subH}>
                  You can change your preferences at any time, find out how in
                  our privacy policy.
                </Text>
              </View>

              <TouchableOpacity
                style={LoginStyle.ButtonStyle}
                onPress={() => {
                  // this.props.navigation.navigate("Personal");
                  Actions[Routeskey.PERSONAL_INFO]();
                }}
              >

                <Text style={LoginStyle.Txt}>Create your Account</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={LoginStyle.ButtonStylefb}
              onPress={() => {
                // this.props.navigation.navigate('Turnonnoti');
              }}
            >
                <Icon name="facebook-square" style={{ color: "#ffff" ,paddingHorizontal:20,  alignSelf: 'flex-start',}} type="AntDesign" />
              <Text style={LoginStyle.Txt}>Continue With Facebook</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 15,
              alignSelf: "center",
              width: "90%"
            }}
          >
            <Text>
              By log in you agree to Dala3 Activities Authority
              <Text style={LoginStyle.end}> Condition of</Text> use and{" "}
              <Text style={LoginStyle.end}>Privacy Policy</Text>
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}
