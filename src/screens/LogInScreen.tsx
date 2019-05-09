import * as React from 'react';
import { Text, View, AsyncStorage, Button } from 'react-native';
import gql from 'graphql-tag';

export interface LoginScreenProps {
  foo?: any;
}
const LOGIN = gql`
mutation auth($auth: AuthInput!) {
  auth(authData: $auth) {
    token
  }
}
`;

class LogInScreen extends React.Component<any> {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this.logInAsync} />
        <Button title="Register" onPress={this.logInAsync} />
      </View>
    );
  }

  logInAsync = async () => {
    await AsyncStorage.setItem('token', 'abc');
    this.props.navigation.navigate('Main');
  }
}

export default LogInScreen;