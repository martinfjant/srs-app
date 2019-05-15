import * as React from 'react';
import { Text, View, Button, TextInput, ImageBackground, StyleSheet } from 'react-native';
import gql from 'graphql-tag';
import { Formik } from 'formik';
import { client } from '../../App';
import { SecureStore, BlurView } from 'expo';
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
    header: null,
  };

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/bg2.png')}
        style={styles.view}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => this.logInAsync(values)}
        >
          {props =>
            (
              <View>
                <BlurView tint='light' intensity={90} style={styles.blurview}>
                  <Text style={styles.label}>E-mail:</Text>
                  <TextInput
                    style={styles.textfield}
                    onChangeText={props.handleChange('email')}
                    onBlur={props.handleBlur('email')}
                    value={props.values.email}

                  />
                  <Text style={styles.label} > Password:</Text>
                  <TextInput
                    style={styles.textfield}
                    onChangeText={props.handleChange('password')}
                    onBlur={props.handleBlur('password')}
                    value={props.values.password}

                    secureTextEntry={true} />
                  <Button title='Log in' onPress={props.handleSubmit} />
                  <Button title='Register' onPress={this.register} />
                </BlurView>
              </View>
            )}
        </Formik>
      </ImageBackground>
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
    await SecureStore.setItemAsync('token', token);

    this.props.navigation.navigate('Main');
  }
  register = () =>
    this.props.navigation.navigate('Register')
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  blurview: {
    minWidth: "90%",
    borderRadius: 20,
    padding: 10,
    marginTop: "-40%"

  },
  label: {
    fontSize: 50,
    fontWeight: '600',
    color: 'orange',
    alignSelf: 'flex-end',
  },
  textfield: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  button: {
    alignSelf: 'flex-start',
  },
});
export default LogInScreen;

