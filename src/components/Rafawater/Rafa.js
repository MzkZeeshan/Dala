import React, {Component} from 'react';
import Rafastyle from './Rafastyle';
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
  ImageBackground,
} from 'react-native';

export default class Rafa extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // const { navigate } = this.props.navigation;

    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={Rafastyle.Main}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
                paddingVertical: 5,
              }}>
              <Text style={{color: '#07adb9'}}>One Time Order</Text>
              <Text style={{color: '#07adb9'}}>Order : 12345</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}>
              <Image
                style={{
                  height: 60,
                  width: 70,
                }}
                source={require('../../assets/images/5.png')}
              />
              <View
                style={{
                  borderLeftWidth: 1,
                  paddingLeft: 6,
                  borderLeftColor: 'gray',
                }}>
                <Text>200ml</Text>
                <Text style={{color: 'blue'}}>Sr.00.00</Text>
                <Text style={{color: 'gray'}}>00 bollte x 00 cartons</Text>
              </View>
              <View>
                <Text>Sr.00.00</Text>
              </View>
            </View>
          </View>
          <View style={Rafastyle.Main}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
                paddingVertical: 5,
              }}>
              <Text style={{color: '#07adb9'}}>One Time Order</Text>
              <Text style={{color: '#07adb9'}}>Order : 12345</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}>
              <Image
                style={{
                  height: 60,
                  width: 70,
                }}
                source={require('../../assets/images/5.png')}
              />
              <View
                style={{
                  borderLeftWidth: 1,
                  paddingLeft: 6,
                  borderLeftColor: 'gray',
                }}>
                <Text>200ml</Text>
                <Text style={{color: 'blue'}}>Sr.00.00</Text>
                <Text style={{color: 'gray'}}>00 bollte x 00 cartons</Text>
              </View>
              <View>
                <Text>Sr.00.00</Text>
              </View>
            </View>
          </View>
          <View style={Rafastyle.Main}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
                paddingVertical: 5,
              }}>
              <Text style={{color: '#07adb9'}}>One Time Order</Text>
              <Text style={{color: '#07adb9'}}>Order : 12345</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}>
              <Image
                style={{
                  height: 60,
                  width: 70,
                }}
                source={require('../../assets/images/5.png')}
              />
              <View
                style={{
                  borderLeftWidth: 1,
                  paddingLeft: 6,
                  borderLeftColor: 'gray',
                }}>
                <Text>200ml</Text>
                <Text style={{color: 'blue'}}>Sr.00.00</Text>
                <Text style={{color: 'gray'}}>00 bollte x 00 cartons</Text>
              </View>
              <View>
                <Text>Sr.00.00</Text>
              </View>
            </View>
          </View>
          <View style={Rafastyle.Main}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
                paddingVertical: 5,
              }}>
              <Text style={{color: '#07adb9'}}>One Time Order</Text>
              <Text style={{color: '#07adb9'}}>Order : 12345</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}>
              <Image
                style={{
                  height: 60,
                  width: 70,
                }}
                source={require('../../assets/images/5.png')}
              />
              <View
                style={{
                  borderLeftWidth: 1,
                  paddingLeft: 6,
                  borderLeftColor: 'gray',
                }}>
                <Text>200ml</Text>
                <Text style={{color: 'blue'}}>Sr.00.00</Text>
                <Text style={{color: 'gray'}}>00 bollte x 00 cartons</Text>
              </View>
              <View>
                <Text>Sr.00.00</Text>
              </View>
            </View>
          </View>
          <View style={Rafastyle.Main}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
                paddingVertical: 5,
              }}>
              <Text style={{color: '#07adb9'}}>One Time Order</Text>
              <Text style={{color: '#07adb9'}}>Order : 12345</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}>
              <Image
                style={{
                  height: 60,
                  width: 70,
                }}
                source={require('../../assets/images/5.png')}
              />
              <View
                style={{
                  borderLeftWidth: 1,
                  paddingLeft: 6,
                  borderLeftColor: 'gray',
                }}>
                <Text>200ml</Text>
                <Text style={{color: 'blue'}}>Sr.00.00</Text>
                <Text style={{color: 'gray'}}>00 bollte x 00 cartons</Text>
              </View>
              <View>
                <Text>Sr.00.00</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={Rafastyle.viewBoxTop}>
          <TouchableOpacity
            style={Rafastyle.ButtonStyle}
            onPress={() => {
              this.props.navigation.navigate('ChangeLanguage');
            }}>
            <Text style={Rafastyle.Txt}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
