import React from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';

export default class SettingsScreen extends React.Component<any> {
  static navigationOptions = {
    title: 'app.json',
  };
  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  render() {
    return (
      <View>
        <Button title="Log out" onPress={this.signOutAsync} />
      </View>
    );
  }
}
