import {StackNavigator} from 'react-navigation';
import {StyleSheet, Image, View, Text} from 'react-native';
// import Login from '../login/Login';
// import Dashboard from '../dashboard/Dashboard';
import SplashScreen from '../Splash/splash';
import Main from '../Main/Main';
import Country from '../Country/Country.js';
import ChangeLanguage from '../Language/Language';
import ShareLocation from '../ShareLocation/Sharelocation';
import TurnOnNoti from '../TurnOnNoti/Turnonnoti';
import Startexplore from '../StartExplore/Startexplore';
import Rafa from '../Rafawater/Rafa';
import Login from '../Login/Login';
import Personal from '../PersonalInfo/Personal';
import Location from '../Location/Location';
import MyBooking from '../Mybooking/Mybooking';

// console.disableYellowBox = true;

// import Services from '../services/services';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';

const styles = StyleSheet.create({
  test: {
    fontSize: 30,
    alignSelf: 'center',
  },
  buttonStyle: {
    backgroundColor: '#053173',
    marginBottom: 3,
  },
  headerLogoContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 7,
  },
  headerLogoImage: {
    width: 50,
    height: 38,
  },
});
const headerTintColor = '#fff';
const headerStyle = {
  backgroundColor: '#053173',
  height: 55,
};

export const MainStack = StackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        header: null,
      },
    },
    Country: {
      screen: Country,
      navigationOptions: {
        header: null,
      },
    },
    Rafa: {
      screen: Rafa,
      navigationOptions: {
        header: null,
      },
    },
    ChangeLanguage: {
      screen: ChangeLanguage,
      navigationOptions: {
        header: null,
      },
    },
    ShareLocation: {
      screen: ShareLocation,
      navigationOptions: {
        header: null,
      },
    },
    Turnonnoti: {
      screen: TurnOnNoti,
      navigationOptions: {
        header: null,
      },
    },
    Startexplore: {
      screen: Startexplore,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Personal: {
      screen: Personal,
      navigationOptions: {
        header: null,
      },
    },
    Location: {
      screen: Location,
      navigationOptions: {
        header: null,
      },
    },
    MyBooking: {
      screen: MyBooking,
      navigationOptions: {
        header: null,
      },
    },
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'MyBooking',
    navigationOptions: {
      headerTitle: <View style={styles.headerLogoContainer}></View>,
      headerTintColor: headerTintColor,
      headerStyle: {...headerStyle},
    },
  },
);
