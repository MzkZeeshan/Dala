import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button
} from "react-native";
import { Icon } from "native-base";
import RoutesKey from "../../navigation/routeskey"
import {Actions,ActionConst} from "react-native-router-flux"
import Routeskey from "../../navigation/routeskey";

import Accordian from "../accordians/accordian"
import Recommend from "../recommendDala/recommend"
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View style={styles.bg}>
          <View style={styles.top}>
            <TouchableOpacity style={styles.headerleft} onPress={()=>
              {
              // console.log("ok")
              Actions.drawerOpen()
            }}>
              <Image
                style={styles.icons}
                source={require("../../assets/images/bars.png")}
              />
            </TouchableOpacity>
            <Image
              style={styles.logo}
              source={require("../../assets/images/3.png")}
            />
            <TouchableOpacity onPress={()=>Actions[Routeskey.SETTING]()} style={styles.headerRight}>
              <Image
                style={styles.icons}
                source={require("../../assets/images/set.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputline}>
            <TextInput
              placeholderTextColor="#fff"
              style={styles.inputbox}
              placeholder="Search..."
            />
            <Icon name="md-search" type="Ionicons" style={styles.searchicon} />
          </View>
        </View>

        <View style={styles.tabbox}>

          <TouchableOpacity style={styles.tabs}>
            <Icon
              name="calendar"
              type="AntDesign"
              style={{ color: "#ab4fe3" }}
            />
          
            <Text style={styles.textSize}>My Bookings</Text>
          </TouchableOpacity>

          <Text style={{ borderWidth: 0.5, borderColor: "lightgray" }}></Text>
          <TouchableOpacity style={styles.tabs}>
            <Icon
              name="id-card"
              type="FontAwesome5"
              style={{ color: "#2ccbfe" }}
            />
            <Text style={styles.textSize}>My Loyality Cards</Text>
          </TouchableOpacity>
          <Text style={{ borderWidth: 0.5, borderColor: "lightgray" }}></Text>

          <TouchableOpacity style={styles.tabs}  onPress={()=>Actions[Routeskey.FAVOURITS_LIST]()}>
            <Icon name="heart" type="AntDesign" style={{ color: "#fd5280" }} />
            <Text style={styles.textSize}>My Favourites</Text>
          </TouchableOpacity>

        </View>
        <View>
          {/* <Recommend /> */}
          <Accordian />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    height: 110,
    width: "100%",
    flexDirection: "row"
  },
  headerleft: {
    flexGrow: 1,
    alignItems: "flex-start",
    marginLeft: 20,
    height: 40,
    paddingTop: 10
  },
  headerRight: {
    flexGrow: 1,
    alignItems: "flex-end",
    marginRight: 20,
    height: 40,
    paddingTop: 10
  },
  logo: {
    flexGrow: 1,
    width: 30,
    resizeMode: "contain"
  },
  icons: {
    width: 30,
    resizeMode: "contain",
    paddingTop: 40
  },
  inputline: {
    flexDirection: "row",
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#3ec0c8",
    alignSelf: "center",
    paddingHorizontal: 10
  },
  inputbox: {
    flex: 1,
    borderRadius: 10,
    fontFamily: "SFProDisplay-Light",
    color: "#ffff"
  },
  bg: {
    backgroundColor: "#07aeb8",
    height: 210,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
  },
  tabbox: {
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#fff",
    height: 80,
    alignSelf: "center",
    marginTop: -35,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  tabs: {
    alignItems: "center",
    alignSelf: "center"
  },
  searchicon: {
    color: "#ffff",
    alignSelf: "center"
  },
  textSize: {
    fontSize: 11
  }
});
