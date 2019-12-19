import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import RoutesKey from "../../navigation/routeskey"
import {Actions} from "react-native-router-flux"
import Routeskey from '../../navigation/routeskey';
export default class FavouriteBlank extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, paddingBottom: 15}}>
        <View style={styles.bg}>
          <TouchableOpacity style={styles.back} >
            <Icon
              style={{color: '#ffff'}}
              type="Ionicons"
              name="ios-arrow-back"
            />
            <Text style={styles.backfont}> Back</Text>
          </TouchableOpacity>
          <Text style={styles.fav}>Favourites</Text>
          <TouchableOpacity style={styles.headerRight}>
            <Image
              style={styles.icons}
              source={require('../../assets/images/set.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View>
            <TouchableOpacity style={styles.headerRight}>
              <Image
                style={styles.heart}
                source={require('../../assets/images/heart.png')}
              />
            </TouchableOpacity>

            <View>
              <View style={styles.txt}>
                <Text>Your Personal List of Favourites Salons</Text>
                <Text>Find a Place you really like?</Text>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text>Add it here by tapping the </Text>
                <Icon
                  style={{color: '#ed1f92'}}
                  name="heart"
                  type="AntDesign"
                />
                <Text> to make</Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <Text>booking even easier</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnfont}> Find a Salon</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#07aeb8',
    height: 100,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  back: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  headerRight: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
  icons: {
    width: 25,
    resizeMode: 'contain',
    paddingTop: 40,
  },
  backfont: {
    color: '#FFFF',
    fontSize: 20,
  },
  fav: {
    color: '#FFFF',
    fontSize: 20,
    marginLeft: -30,
  },
  heart: {
    alignSelf: 'center',
    width: '35%',
    resizeMode: 'contain',
  },
  txt: {
    alignItems: 'center',
    fontSize: 30,
  },
  btn: {
    width: '80%',
    alignSelf: 'center',
    height: 50,
    backgroundColor: '#07aeb8',
    borderRadius: 7,
  },
  btnfont: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
    padding: 10,
  },
});