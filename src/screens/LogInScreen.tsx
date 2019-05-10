import * as React from 'react';
import { Text, View, AsyncStorage, Button, TextInput } from 'react-native';
import gql from 'graphql-tag';
import { Mutation, ApolloConsumer } from 'react-apollo';
import { Formik, Field } from 'formik';
import { client } from '../../App';
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
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => this.logInAsync(values)}
        >
          {props =>
            (
              <View>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}

                />
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}

                  secureTextEntry={true} />
                <Button title='Log in' onPress={props.handleSubmit} />
                <Button title='Register' onPress={() => console.log('register')} />
              </View>
            )}
        </Formik>
      </View >
    );
  }


  logInAsync = async (values: any) => {
    const auth = {
      "auth":
      {
        "email": values.email,
        "password": values.password,
      },
    }
    const response = await client.mutate({ variables: auth, mutation: LOGIN })
    const token = response.data.auth.token;
    await AsyncStorage.setItem('token', 'token');
    this.props.navigation.navigate('Main');
  }
}

export default LogInScreen;