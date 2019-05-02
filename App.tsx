import React, { ReactPropTypes } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import AppNavigator from './src/navigation/AppNavigator';
import { Ionicons } from '@expo/vector-icons';

interface IPropTypes extends ReactPropTypes {
  skipLoadingScreen: boolean;
}
export default class App extends React.Component<IPropTypes> {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
        <AppNavigator />
      </View>
    );
  }

  loadResourcesAsync = async (): Promise<any> => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  }

  handleLoadingError = (error: any): void => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  }

  handleFinishLoading = (): void => {
    this.setState({ isLoadingComplete: true });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});