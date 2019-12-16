import React, {Component} from 'react';
import LoginStyle from './LoginStyle';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Icon} from 'native-base';
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'key1',
    };
  }

  onChange(name, val) {
    this.setState({[name]: val});
  }
  render() {
    return (
      <ScrollView>
        <View
          style={LoginStyle.bg}
          resizeMode="stretch"
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
        </View>
        <View style={LoginStyle.View}>
          <View style={LoginStyle.Main}>
            <Text style={LoginStyle.H1}>Create your account</Text>

            <View style={LoginStyle.InputTextView}>
              <View style={LoginStyle.TextInputView}>
                <Icon style={LoginStyle.Icon} name="add-circle" />
                <TextInput
                  underlineColorAndroid="transparent"
                  style={LoginStyle.TextInputStyle}
                  maxLength={250}
                  placeholder="Email"
                  placeholderTextColor="#b2b2b2"
                  onChangeText={this.onChange.bind(this, 'email')}
                  // value={address}
                />
              </View>
            </View>
            <View style={LoginStyle.InputTextView}>
              <View style={LoginStyle.TextInputView}>
                <Icon style={LoginStyle.Icon} name="add-circle" />
                <TextInput
                  underlineColorAndroid="transparent"
                  style={LoginStyle.TextInputStyle}
                  maxLength={50}
                  placeholder="Full name"
                  placeholderTextColor="#b2b2b2"
                  onChangeText={this.onChange.bind(this, 'email')}
                  // value={address}
                />
              </View>
            </View>
            <View style={LoginStyle.InputTextView}>
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
            <TouchableOpacity
              style={LoginStyle.ButtonStyle}
              onPress={() => {
                this.props.navigation.navigate('Turnonnoti');
              }}>
              <Text style={LoginStyle.Txt}>Create your Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
