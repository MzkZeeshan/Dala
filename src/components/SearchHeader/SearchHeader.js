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
        <View style={{
          flexDirection:"row",
          // justifyContent:"space-between",
        backgroundColor:"#07adb9",
        paddingHorizontal:5,
        paddingTop:5,
        paddingBottom:20,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
  
        }}>
            <View style={{}}>
              <TouchableOpacity>

            <Icon name='chevron-left' style={{color:"#ffff", }} type="Entypo" />
              </TouchableOpacity>
            
            </View>
           <View style={{ flex:1 }}>
                  <View style={{
                      backgroundColor: '#3dc0c9',
                      flexDirection:"row",
                      color: 'blue',
                      borderRadius: 5,
                      height:40,
                      alignItems:"center",
                      marginVertical:2
                  }}>
                    <Icon
                      name="search1"
                      style={{
                        color: "#fff",
                        fontSize: 18,
                        paddingVertical: 5,
                        paddingHorizontal: 5
                      }}
                      type="AntDesign"
                    />

                    <TextInput
                      style={{ flex: 1,color:"#fff" }}
                      underlineColorAndroid="transparent"
                      placeholder="Search"
                      placeholderTextColor="#f0f0f0"
                      onChangeText={this.onChange.bind(this, "search")}
                    />
                  </View>
                  <View style={{
                      backgroundColor: '#3dc0c9',
                      flexDirection:"row",
                      color: 'blue',
                      height:40,
                      borderRadius: 5,
                      alignItems:"center",
                      marginVertical:2
                  }}>
                    <Icon
                      name="location-pin"
                      style={{
                        color: "#fff",
                        fontSize: 18,
                        paddingVertical: 5,
                        paddingHorizontal: 5
                      }}
                      type="Entypo"
                    />

                    <TextInput
                      style={{ flex: 1,color:"#fff" }}
                      underlineColorAndroid="transparent"
                      placeholder="UAE"
                      placeholderTextColor="#fff"
                      onChangeText={this.onChange.bind(this, "search")}
                    />
                  </View>
                  <View style={{
                      backgroundColor: '#3dc0c9',
                      flexDirection:"row",
                      color: 'blue',
                      height:40,
                      borderRadius: 5,
                      alignItems:"center",
                      marginVertical:2
                  }}>
                    <Icon
                      name="calendar"
                      style={{
                        color: "#fff",
                        fontSize: 18,
                        paddingVertical: 5,
                        paddingHorizontal: 5
                      }}
                      type="Entypo"
                    />

                    <TextInput
                      style={{ flex: 1,color:"#fff" }}
                      underlineColorAndroid="transparent"
                      placeholder="Any time"
                      placeholderTextColor="#f0f0f0"
                      onChangeText={this.onChange.bind(this, "search")}
                    />
                  </View>
           </View>
      
        </View>
    );
  }
}
