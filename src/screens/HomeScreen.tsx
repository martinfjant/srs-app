import React, { ReactElement } from 'react';
import {
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { BlurView } from 'expo';

import SwipeStack from '../components/SwipeStack/SwipeStack';

export default class HomeScreen extends React.Component {
  state = { hideStack: false, correct: 0 };
  static navigationOptions = {
    title: 'Review',
    headerBackground: (
      <BlurView tint='light' intensity={90} style={StyleSheet.absoluteFill} />
    ),
    headerStyle: {
      borderBottomColor: '#A7A7AA',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    headerTransparent: true,
  };

  logger = (input: any): void => console.log(input);


  render() {
    return (

      <ImageBackground
        source={require('../../assets/images/bg2.png')}
        style={{ width: '100%', height: '100%' }}>
        <SwipeStack
          hidden={this.state.hideStack}
          onFinish={() => this.setState({ hideStack: true })}
          onRight={() => this.setState({ correct: this.state.correct + 1 })}
        />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'blue',
    alignContent: 'center',
  },
  test: {
    alignSelf: 'center',
    margin: 10,
    marginTop: 550,
    padding: 30,
    borderRadius: 10,
    maxHeight: 150,
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A7A7AA',
    justifyContent: 'center',
    backgroundColor: 'white',
    maxHeight: 400,
    marginTop: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'transparent',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
});
