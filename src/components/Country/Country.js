import React, {Component} from 'react';
import CountryStyle from './CountryStyle';
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
import {
  Container,
  CardItem,
  Header,
  Content,
  Picker,
  Icon,
  Form,
  Left,
} from 'native-base';

export default class Country extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'key1',
    };
  }
  onValueChange = value => {
    this.setState({
      selected: value,
    });
  };

  render() {
    // const { navigate } = this.props.navigation;

    return (
      <View style={{flex:1}}>
        <ImageBackground
          style={CountryStyle.bg}
          resizeMode="stretch"
          source={require('../../assets/images/2.png')}>
          <View style={CountryStyle.viewBoxTop}>
            <Image
              style={CountryStyle.Logoimage}
              source={require('../../assets/images/3.png')}
            />
          </View>
          <View style={CountryStyle.viewBoxTop1}>
            <Image
              style={CountryStyle.worldImage}
              source={require('../../assets/images/4.png')}
            />
          </View>
        </ImageBackground>
        <View style={CountryStyle.View}>
          <Text style={CountryStyle.Text}>Change Country? </Text>
           
            
{/* <View style={CountryStyle.scroll}> */}
          <ScrollView style={CountryStyle.scroll}>

            <View style={CountryStyle.countryView}>
              <Text style={CountryStyle.countryText}>Abu Dhabi</Text>
              <Icon
               style={{fontSize: 18, alignSelf: 'center', paddingVertical: 10,color:"gray"}}
                name="add-circle"
              />
            </View>
            <View style={CountryStyle.countryView}>
              <Text style={CountryStyle.countryText}>Dhubi Dhabi  </Text>
              <Icon
               style={{fontSize: 18, alignSelf: 'center', paddingVertical: 10,color:"gray"}}
                name="add-circle"
              />
            </View>
            <View style={CountryStyle.countryView}>
              <Text style={CountryStyle.countryText}>AjmanDhabi</Text>
              <Icon
               style={{fontSize: 18, alignSelf: 'center', paddingVertical: 10,color:"gray"}}
                name="add-circle"
              />
            </View>
            <View style={CountryStyle.countryView}>
              <Text style={CountryStyle.countryText}>Fujairah</Text>
              <Icon
               style={{fontSize: 18, alignSelf: 'center', paddingVertical: 10,color:"gray"}}
                name="add-circle"
              />
            </View>
            <View style={CountryStyle.countryView}>
              <Text style={CountryStyle.countryText}>Fujairah</Text>
              <Icon
               style={{fontSize: 18, alignSelf: 'center', paddingVertical: 10,color:"gray"}}
                name="add-circle"
              />
            </View>
          </ScrollView>
</View>
        {/* </View> */}

        <View style={CountryStyle.viewBoxB}>
          <TouchableOpacity
            style={CountryStyle.ButtonStyle}
            onPress={() => {
              this.props.navigation.navigate('ChangeLanguage');
            }}>
            <Text style={CountryStyle.Txt}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
