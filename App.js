import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,PermissionsAndroid,
  Text,
  View
} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import { MainStack } from './src/components/routing/stack'

export default class App extends Component<{}> {
  constructor(props){
    super(props);
  
  }

  render() {
    return (
        <View style={styles.container}>
          <MainStack />      
    
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
