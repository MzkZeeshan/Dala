import React, { Component } from 'react';
import LoginStyle from './LoginStyle';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView, CheckBox,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Icon ,Content} from 'native-base';
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'key1',
    };
  }

  onChange(name, val) {
    this.setState({ [name]: val });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>

        <ImageBackground style={{ flex: 0.6 }}
          resizeMode="stretch"

          // resizeMode="contain"
          source={require('../../assets/images/2.png')}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Turnonnoti');
            }}>
            <Text> </Text>
          </TouchableOpacity>
          <View style={LoginStyle.viewBoxTop}>
            <Image
              style={LoginStyle.Logoimage}
              source={require('../../assets/images/3.png')}
            />
          </View>

        </ImageBackground>
        <View style={{ flex: 1 }}>
        </View>
        <View style={{ position: "absolute", top: "25%", width: "100%",backgroundColor:"re" }}>

              <ScrollView style={{ width: "100%" }}>


          <View style={LoginStyle.View}>
            <View style={LoginStyle.Main}>
                  <Text style={LoginStyle.H1}>Create your account</Text>
                <View >


                  <View style={LoginStyle.TextInputView}>
                    <Icon style={LoginStyle.Icon} name="add-circle" />
                    <TextInput
                      underlineColorAndroid="transparent"
                      style={LoginStyle.TextInputStyle}
                      placeholder="Email"
                      placeholderTextColor="#b2b2b2"
                      onChangeText={this.onChange.bind(this, 'email')}
                    // value={address}
                    />
                  </View>
                  <View style={LoginStyle.TextInputView}>
                    <Icon style={LoginStyle.Icon} name="add-circle" />
                    <TextInput
                      underlineColorAndroid="transparent"
                      style={LoginStyle.TextInputStyle}
                      placeholder="Full name"
                      placeholderTextColor="#b2b2b2"
                      onChangeText={this.onChange.bind(this, 'Full name')}
                    // value={address}
                    />
                  </View>

                  <View style={LoginStyle.TextInputView}>
                    <Icon style={LoginStyle.Icon} name="add-circle" />
                    <TextInput
                      underlineColorAndroid="transparent"
                      style={LoginStyle.TextInputStyle}
                      maxLength={30}
                      placeholder="Password"
                      secureTextEntry={true}
                      placeholderTextColor="#b2b2b2"
                      onChangeText={this.onChange.bind(this, 'email')}
                    // value={address}
                    />
                    <Icon style={LoginStyle.Icon} name="add-circle" />
                  </View>

                  </View>
                  <Text style={LoginStyle.textbottom}>Please enter atleast 8 charactars</Text>
                  <View style={{ flexDirection: "row" }}>

                    <CheckBox
                      value={this.state.checkml}
                      onValueChange={() => this.setState({ checkml: !this.state.checkml })}
                    />
                    <View>
                      <Text style={LoginStyle.textbom}>Send me emails form Dala3 with the </Text>
                      <Text style={LoginStyle.textbom}> latest offers & beauty news.</Text>
                    </View>
                  </View>

                  <View style={{ paddingHorizontal: 1 }}>
                    <Text style={LoginStyle.subH}>
                      You can change your preferences at any time, find out how in our privacy policy.
            </Text>
                  </View>

                 

                  <TouchableOpacity
                    style={LoginStyle.ButtonStyle}
                    onPress={() => {
                      this.props.navigation.navigate('Turnonnoti');
                    }}>
                    <Text style={LoginStyle.Txt}>Create your Account</Text>
                  </TouchableOpacity>




                    </View>
                <Text>By log in you agree to Dala3 Activities Authority
                  Condition of use and Privacy Policy
                </Text> 
        
                  </View>
        </ScrollView>
        </View>





      </View>
    );
  }
}
