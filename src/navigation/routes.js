import {
  Router,
  Scene,
  Actions,
  Stack,
  Drawer
} from "react-native-router-flux";
import RoutesKey from "../navigation/routeskey";

import SplashScreen from "../components/Splash/splash";
import Main from "../components/Main/Main";
import Country from "../components/Country/Country.js";
import ChangeLanguage from "../components/Language/Language";
import ShareLocation from "../components/ShareLocation/Sharelocation";
import TurnOnNoti from "../components/TurnOnNoti/Turnonnoti";
import Startexplore from "../components/StartExplore/Startexplore";
import CreateAccount from "../components/Login/CreateAccount";
import Personal from "../components/PersonalInfo/Personal";
import Location from "../components/Location/Location";
import MyBooking from "../components/Mybooking/Mybooking";
import Homescreen from "../components/Homescreen/Homescreen";
import Waxbueaty from "../components/Waxbeauty/Waxbeauty";
import WaxDetail from "../components/WaxDetail/WaxDetail";
import Favlist from "../components/Favourite/Favourite";
import Fav from "../components/Favourite/favouriteblank";
import Drawers from "./DrawerContent";
import  Constant from "../constant/Constant";
import Setting from "../components/Setting/Setting"




import React, { Component } from "react";
import Routeskey from "../navigation/routeskey";

const RouterFlux = props => {
  // const MenuIcon = () => <Icon name="ios-cog" />

  return (
    <Router>
      <Scene key="root" hideNavBar>
        {/* <Scene key={RoutesKey.SPLASH} component={Drawers} initial={true} /> */}

        {/* <Scene key={RoutesKey.SPLASH} component={SplashScreen} initial={true} />
      <Stack key="root" hideNavBar>
        <Scene key={RoutesKey.SPLASH} component={SplashScreen}   initial={true}/>
        <Scene key={RoutesKey.MAIN} component={Main} />
        <Scene key={RoutesKey.COUNTRY} component={Country} />
        <Scene key={RoutesKey.SHARE_LOCATION} component={ShareLocation} />
        <Scene key={RoutesKey.LANGUAGE} component={ChangeLanguage} />
        <Scene key={RoutesKey.TURN_ON_NOTIFICATION} component={TurnOnNoti} />

        <Scene key={RoutesKey.START_EXPLORING} component={Startexplore} />
        <Scene key={RoutesKey.CREATE_ACCOUNT} component={CreateAccount} />
        <Scene key={Routeskey.PERSONAL_INFO} component={Personal} />
        <Scene key={Routeskey.HOME_SCREEN} component={Homescreen}/>
        <Scene key={Routeskey.FAVOURITS} component={Fav} />
        <Scene key={Routeskey.WAX_BUEATY} component={Waxbueaty} />
        <Scene key={Routeskey.WAX_DETAIL} component={WaxDetail} />
        <Scene key={Routeskey.FAVOURITS_LIST} component={Favlist} />
        <Scene key={Routeskey.FAVOURITS} component={Fav} /> */}
        

        <Drawer
          key="root"
          type="reset"
          contentComponent={Drawers}
          hideNavBar
          drawer
          drawerWidth={Constant.WIDTH*0.7}
        >
          <Scene hideNavBar>
         


          <Scene key={RoutesKey.SPLASH} component={SplashScreen} initial={true} />
        <Scene key={RoutesKey.MAIN} component={Main} />
        <Scene key={RoutesKey.COUNTRY} component={Country} />
        <Scene key={RoutesKey.SHARE_LOCATION} component={ShareLocation} />
        <Scene key={RoutesKey.LANGUAGE} component={ChangeLanguage} />
        <Scene key={RoutesKey.TURN_ON_NOTIFICATION} component={TurnOnNoti} />
        <Scene key={RoutesKey.FAVOURITS_LIST} component={Favlist} />
        <Scene key={RoutesKey.FAVOURITS} component={Fav} />

        

        <Scene key={RoutesKey.START_EXPLORING} component={Startexplore} />
        <Scene key={RoutesKey.CREATE_ACCOUNT} component={CreateAccount} />
        <Scene key={Routeskey.PERSONAL_INFO} component={Personal} />
        <Scene key={Routeskey.HOME_SCREEN} component={Homescreen} />
        <Scene key={Routeskey.FAVOURITS} component={Fav} />
        <Scene key={Routeskey.WAX_BUEATY} component={Waxbueaty} />
        <Scene key={Routeskey.WAX_DETAIL} component={WaxDetail} />
        <Scene key={Routeskey.FAVOURITS_LIST} component={Favlist} />
        <Scene key={Routeskey.FAVOURITS} component={Fav} /> 
        <Scene key={Routeskey.SETTING} component={Setting} /> 

          </Scene>
        </Drawer>
      </Scene>
    </Router>
  );
};

export default RouterFlux;
