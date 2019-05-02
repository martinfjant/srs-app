import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Review',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.container}>
          <Text style={styles.test}>What is the capital of France?</Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'blue',
    alignContent: 'center',
  },
  test: {
    alignSelf: 'center',
    margin: 10,
    padding: 30,
    borderRadius: 10,
    maxHeight: 150,
    backgroundColor: '#fff',
  },
});
