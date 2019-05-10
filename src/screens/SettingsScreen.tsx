import React from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };
  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View>
        <Text>Here be stuff</Text>
        <Button title="Actually, sign me out :)" onPress={this.signOutAsync} />
      </View>
    );
  }
}
