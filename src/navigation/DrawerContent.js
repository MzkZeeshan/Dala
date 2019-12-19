import React, { Component } from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import {
  Container,
  Card,
  Content,
  Button,
  Text,
  Icon,
  Thumbnail
} from "native-base";

import { Actions } from "react-native-router-flux";
import Constant from "../constant/Constant";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import LinearGradient from 'react-native-linear-gradient';

export default class DrawerContent extends Component {
  constructor() {
    super();
    this.state = {
      userDetail: {}
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          width: Constant.WIDTH * 0.7
        }}
      >
        <View
          style={{
            flex: 2,
            // backgroundColor: "yellow",
            flexDirection: "column"
          }}
        >
          <ImageBackground
            style={{ width: Constant.WIDTH * 0.7, height: 240 }}
            source={require("../assets/images/drawer.png")}
            resizeMode="stretch"
          >
            <View
              style={{
                flex: 1,
                // backgroundColor: "yellow",
                flexDirection: "row-reverse"
              }}
            >
                <TouchableOpacity onPress={()=>Actions.drawerClose()}>
              <View
                style={{
                  //   backgroundColor: "blue",
                  height: 80,
                  width: 50,
                  flexDirection: "column-reverse"
                }}
              >
                <Image
                  style={{ color: "white", width: 25, height: 25 }}
                  source={require("../assets/images/barsw.png")}
                />
              </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 2,
                // backgroundColor: "green",
                flexDirection: "row",
                justifyContent: "center"
                // alignItems:"center"
              }}
            >
              <View
                style={
                  {
                    //   height: 120,
                    //   width: 120,
                    //   backgroundColor: "pink",
                    //   borderRadius: 200,
                    //   borderWidth:5,
                    //   borderStyle:"solid"
                  }
                }
              >
                <Thumbnail
                  style={{
                    width: 100,
                    height: 100,
                    marginHorizontal: 5,
                    borderColor: "#7ad3d9",
                    borderWidth: 5,
                    borderRadius: 200
                  }}
                  source={require("../assets/images/bachi.png")}
                />

                {/* <Image
                  style={{ height: 100, width: 100,borderRadius: 50,borderStyle:"solid",borderWidth:5, }}
                  resizeMode="contain"
                /> */}
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={{ flex: 4, flexDirection: "column" }}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.listBox}>
              <View style={styles.card}>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon style={styles.icon} type="FontAwesome" name="home" />
                    <Text style={styles.text}>Home</Text>
                    <Icon
                      style={styles.icon2}
                      type="Ionicons"
                      name="ios-arrow-forward"
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <View style={styles.listBox}>
              <View style={styles.card}>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      style={styles.icon}
                      type="Ionicons"
                      name="ios-contact"
                    />
                    <Text style={styles.text}>My Profile</Text>
                    <Icon
                      style={styles.icon2}
                      type="Ionicons"
                      name="ios-arrow-forward"
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <View style={styles.listBox}>
              <View style={styles.card}>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon style={styles.icon} name="lock" />
                    <Text style={styles.text}>Change Password</Text>
                    <Icon
                      style={styles.icon2}
                      type="Ionicons"
                      name="ios-arrow-forward"
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <View style={styles.listBox}>
              <View style={styles.card}>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      style={styles.icon}
                      type="Entypo"
                      name="info-with-circle"
                    />
                    <Text style={styles.text}>Contact Us</Text>
                    <Icon
                      style={styles.icon2}
                      type="Ionicons"
                      name="ios-arrow-forward"
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <View style={styles.listBox}>
              <View style={styles.card}>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      style={styles.icon}
                      type="FontAwesome5"
                      name="envelope-open-text"
                    />
                    <Text style={styles.text}>About Us</Text>
                    <Icon
                      style={styles.icon2}
                      type="Ionicons"
                      name="ios-arrow-forward"
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <View style={styles.listBox}>
              <View style={styles.card}>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      style={styles.icon}
                      type="FontAwesome5"
                      name="envelope-open-text"
                    />
                    <Text style={styles.text}>Terms Condition</Text>
                    <Icon
                      style={styles.icon2}
                      type="Ionicons"
                      name="ios-arrow-forward"
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <View style={styles.listBox}>
              <View style={styles.card}>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      style={styles.icon}
                      type="FontAwesome5"
                      name="envelope-open-text"
                    />
                    <Text style={styles.text}>Logout</Text>
                    <Icon
                      style={styles.icon2}
                      type="Ionicons"
                      name="ios-arrow-forward"
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  card: {
    flexDirection: "column",
    flex: 1,
    paddingVertical: 3,
    paddingHorizontal: 2
  },
  listBox: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 6,
    marginLeft: 10,
    marginRight: 10,
    elevation: 22
  },
  icon: {
    fontSize: 30,
    alignSelf: "center",
    paddingVertical: 3,
    paddingLeft: 8,
    color: Constant.COLOR,
    flex: 2
  },
  text: {
    paddingVertical: 10,
    fontWeight: "bold",
    // backgroundColor:"yellow",
    flex: 6
  },
  icon2: {
    flex: 1,
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 2
    //   Left:30,
    //   backgroundColor:"red"
  },

  pendingCard: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginTop: "5%"
  },

  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    resizeMode: "cover"
  },
  userName: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginBottom: "5%"
  },
  buttonStyle: {
    marginBottom: 15,
    width: "90%",
    marginLeft: "5%"
  },
  buttonText: {
    textAlign: "center",
    width: "100%"
  }
};
