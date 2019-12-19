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
import {Actions} from "react-native-router-flux"
import Routeskey from "../../navigation/routeskey";

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
            <TouchableOpacity style={styles.headerleft}>
              <Image
                style={styles.icons}
                source={require("../../assets/images/bars.png")}
              />
            </TouchableOpacity>
            <Image
              style={styles.logo}
              source={require("../../assets/images/3.png")}
            />
            <TouchableOpacity style={styles.headerRight}>
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
            <Text>My Bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabs}>
            <Icon
              name="id-card"
              type="FontAwesome5"
              style={{ color: "#2ccbfe" }}
            />
            <Text>My Loyality Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabs} onPress={()=>Actions[Routeskey.FAVOURITS_LIST]()}>
            <Icon name="heart" type="AntDesign" style={{ color: "#fd5280" }} />
            <Text>My Favourites</Text>
          </TouchableOpacity>
        </View>
        <View>
         
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
    width: "85%",
    borderRadius: 10,
    backgroundColor: "#fff",
    height: 80,
    alignSelf: "center",
    marginTop: -35,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  tabs: {
    borderColor: "#ffff",
    alignItems: "center"
  },
  searchicon: {
    color: "#ffff",
    alignSelf: "center"
  }
});
