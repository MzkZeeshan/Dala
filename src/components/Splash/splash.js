import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import { NavigationActions } from 'react-navigation';

class SplashScreen extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 3500),
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      // this.props.navigation.navigate('Main');
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Personal' })],
      });
      this.props.navigation.dispatch(resetAction);
    }
  }

  render() {
    return (
      <ImageBackground
        style={styles.viewStyles}
        source={require('../../assets/images/2.png')}>
        <View>
          <Image
            style={{width: 250, height: 80}}
            source={require('../../assets/images/3.png')}
          />
          {/* <Text style={{color:"#053173",fontSize:50,fontWeight:"bold",paddingBottom:50,marginBottom:"70%"}}>Water supply </Text> */}
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A3D7F7',
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
};

export default SplashScreen;
