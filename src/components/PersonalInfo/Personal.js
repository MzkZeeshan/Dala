import React, { Component } from 'react';
import perStyle from './PersonalStyle';
import {
  Text,
  View,
  Image,
  TextInput,Switch,
  ScrollView, CheckBox,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Icon ,Content} from 'native-base';
export default class Personal extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'key1',
    };
  }

  onChange(name, val) {
    this.setState({ [name]: val });
  }
  toggleSwitch = (value) => {
    this.setState({switchValue: value})
 }
  render() {
    return (
      <ScrollView>
        <ImageBackground style={{ flex: 1 }}
          resizeMode="cover"

          // resizeMode="contain"
          source={require('../../assets/images/fix.png')}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Turnonnoti');
            }}>
            <Text> </Text>
          </TouchableOpacity>
          <View style={perStyle.viewBoxTop}>
            <Image
              style={perStyle.Logoimage}
              source={require('../../assets/images/3.png')}
            />
          </View>

         
              
          <View style={perStyle.View}>
            <View style={perStyle.Main}>
                  <Text style={perStyle.H1}>Create your account</Text>
                <View >


                  <View style={perStyle.TextInputView}>
                  <Icon style={perStyle.Icon} name="email-box" type="MaterialCommunityIcons" />
                    <TextInput
                      underlineColorAndroid="transparent"
                      style={perStyle.TextInputStyle}
                      placeholder="Email"
                      placeholderTextColor="#b2b2b2"
                      onChangeText={this.onChange.bind(this, 'email')}
                    // value={address}
                    />
                  </View>
                  <View style={perStyle.TextInputView}>
                  <Icon style={perStyle.Icon} name="account-box" type="MaterialCommunityIcons" />
                    <TextInput
                      underlineColorAndroid="transparent"
                      style={perStyle.TextInputStyle}
                      placeholder="Full name"
                      placeholderTextColor="#b2b2b2"
                      onChangeText={this.onChange.bind(this, 'Full name')}
                    // value={address}
                    />
                  </View>

                  <View style={perStyle.TextInputView}>
                  <Icon style={perStyle.Icon} name="lock" type="MaterialCommunityIcons"  />
                    <TextInput
                      underlineColorAndroid="transparent"
                      style={perStyle.TextInputStyle}
                      maxLength={30}
                      placeholder="Password"
                      secureTextEntry={true}
                      placeholderTextColor="#b2b2b2"
                      onChangeText={this.onChange.bind(this, 'email')}
                    // value={address}
                    />
                         {/* <Icon style={perStyle.Icon} name="eye-outline" type="MaterialCommunityIcons" /> */}
                    <Icon style={perStyle.Icon} name="eye-off-outline" type="MaterialCommunityIcons" />
                  </View>

                  </View>
                  <View style={{ flexDirection: "row" ,paddingHorizontal:25}}>
                      <View >
                  <Text style={perStyle.textbottom}>Have you visited Asethetic for life in the last 12 months ?</Text>
                  </View>
                  <View>
                  <Switch
                    style={{backgroundColor:'07adb9'}}
                    onValueChange = {this.toggleSwitch}
                    value = {this.state.switchValue}/>
                            
            </View>
                  </View>
                        <View style={{ flexDirection: "row",paddingLeft:20 ,paddingTop:2}}>

                        <CheckBox
                        value={this.state.checkml}
                        onValueChange={() => this.setState({ checkml: !this.state.checkml })}
                        />
                        <View>
                        <Text style={perStyle.textbom}>Tick this box if you don't want to receive emails from Dala3 with the latest offer & beauty news  </Text>
                        
                        </View>
                        </View>
                        <View style={{ flexDirection: "row",paddingLeft:20 ,paddingTop:2}}>

                        <CheckBox
                        value={this.state.check}
                        onValueChange={() => this.setState({ check: !this.state.check })}
                        />
                        <View>
                        <Text style={perStyle.textbom}>Tick to allow the venue i'm boking with to send me mail and SMS about  their services </Text>
                        
                        </View>
                        </View>
                      
                  <View style={{ paddingHorizontal: 1 ,paddingVertical:15}}>
                    <Text style={perStyle.subH}>
                      You can change your preferences at any time, find out how in our privacy policy.
            </Text>
                  </View>

                 
                  
                  <TouchableOpacity
                    style={perStyle.ButtonStyle}
                    onPress={() => {
                      this.props.navigation.navigate('Turnonnoti');
                    }}>
                    <Text style={perStyle.Txt}>Continue</Text>
                  </TouchableOpacity>

                    
                    </View>
              
                    <Text  style={perStyle.book}>Book faster by signing in</Text>
                  <TouchableOpacity
                    style={perStyle.ButtonStylefb}
                    onPress={() => {
                      // this.props.navigation.navigate('Turnonnoti');
                    }}>
                    <Text style={perStyle.Txt}>Continue With Facebook</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={perStyle.ButtonStylegoogle}
                    onPress={() => {
                      // this.props.navigation.navigate('Turnonnoti');
                    }}>
                    <Text style={perStyle.Txt}>Continue With Email</Text>
                  </TouchableOpacity>
        
                  </View>
             
      
                  </ImageBackground>

        </ScrollView>



    );
  }
}
