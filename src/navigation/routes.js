import { Router, Scene, Actions, Stack } from "react-native-router-flux";
import RoutesKey from "../navigation/routeskey";

import SplashScreen from "../components/Splash/splash";
import Main from "../components/Main/Main";
import Country from "../components/Country/Country.js";
import ChangeLanguage from "../components/Language/Language";
import ShareLocation from "../components/ShareLocation/Sharelocation";
import TurnOnNoti from "../components/TurnOnNoti/Turnonnoti";
import Startexplore from "../components/StartExplore/Startexplore";
import Rafa from "../components//Rafawater/Rafa";
import CreateAccount from "../components/Login/CreateAccount";
import Personal from "../components/PersonalInfo/Personal";
import Location from "../components/Location/Location";
import MyBooking from "../components/Mybooking/Mybooking";
import Homescreen from "../components/Homescreen/Homescreen";

import React, { Component } from "react";
import Routeskey from "../navigation/routeskey";

const RouterFlux = props => {
  // const MenuIcon = () => <Icon name="ios-cog" />

  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key={RoutesKey.SPLASH} component={SplashScreen} initial={true} />
        <Scene key={RoutesKey.MAIN} component={Main} />
        <Scene key={RoutesKey.COUNTRY} component={Country} />
        <Scene key={RoutesKey.SHARE_LOCATION} component={ShareLocation} />
        <Scene key={RoutesKey.LANGUAGE} component={ChangeLanguage} />
        <Scene key={RoutesKey.TURN_ON_NOTIFICATION} component={TurnOnNoti} />
        <Scene key={RoutesKey.START_EXPLORING} component={Startexplore} />
        <Scene key={RoutesKey.CREATE_ACCOUNT} component={CreateAccount} />
        <Scene key={Routeskey.PERSONAL_INFO} component={Personal} />
        <Scene key={Routeskey.HOME_SCREEN} component={Homescreen} />
      </Stack>
    </Router>
  );
};

export default RouterFlux;
