import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
  FlatList,
  ImageBackground,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }

  onChange(name, val) {
    this.setState({ [name]: val });
  }
  render() {

    return (
        <View style={{flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#07adb9",
        paddingHorizontal:10,
        paddingVertical:20,
        alignContent:"center",
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        alignItems:"center"
  
        }}>
            <View style={{flexDirection:"row",alignSelf:"center"}}>
            <Icon name='chevron-left' style={{color:"#ffff"}} type="Entypo" />
            
            </View>
            <View style={{}}>
            <View style={{
                marginVertical: 5,
                flexDirection: 'row',
                backgroundColor: 'white',
                borderRadius: 5,
                paddingHorizontal: 10,
                alignItems: 'center',
                elevation: 1,
                width: '90%',
                shadowColor: "#000",
            elevation: 3,
            }}>
                  <Icon
                    style={{
                      fontSize: 24,
                      color:"#07adb9" ,

                    }}
                    name="lock"
                    type="MaterialCommunityIcons"
                  />
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={{
                      flex: 1,
                      color: 'grey',
                      marginRight: 10,
                    }}
                    maxLength={30}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#b2b2b2"
                    onChangeText={this.onChange.bind(this, "search")}
                    // value={address}
                  />
             
            </View>
        </View>
    );
  }
}
