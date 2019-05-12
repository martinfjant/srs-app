import * as React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import gql from 'graphql-tag';
import { Mutation, ApolloConsumer } from 'react-apollo';
import { Formik, Field } from 'formik';
import { client } from '../../App';
import { SecureStore } from 'expo';
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
                <Text>E-mail:</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}

                />
                <Text>Password:</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}

                  secureTextEntry={true} />
                <Button title='Log in' onPress={props.handleSubmit} />
                <Button title='Register' onPress={this.register} />
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

    try {
      await SecureStore.setItemAsync('token', token);
    }
    catch (e) {
      console.log(e);
    }


    this.props.navigation.navigate('Main');



  }
  register = () =>
    this.props.navigation.navigate('Register')
}

export default LogInScreen;