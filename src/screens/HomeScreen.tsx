import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { LinearGradient, BlurView } from 'expo';

export default class HomeScreen extends React.Component {
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

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/palm.jpg')}
        style={{ width: '100%', height: '100%' }}>
        <ScrollView>
          <Text style={styles.test}>What is the capital of France?</Text>
        </ScrollView>
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
    marginTop: 200,
    padding: 30,
    borderRadius: 10,
    maxHeight: 150,
    backgroundColor: '#fff',
  },
});
