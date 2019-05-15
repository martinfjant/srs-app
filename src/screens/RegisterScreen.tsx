import * as React from 'react';
import { Formik } from 'formik'
import { View, TextInput, Button, Text, StyleSheet, ImageBackground } from 'react-native';
import { client } from '../../App';
import gql from 'graphql-tag';
import { BlurView } from 'expo';

const REG = gql`
mutation addUser($user: UserInput!){
  addUser(userData: $user){
    name,
    id,
    created
  }
}
`;

export interface RegisterScreenProps {

}

export interface RegisterScreenState {

}

class RegisterScreen extends React.Component<any> {
  static navigationOptions = {
    title: 'Register',
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
        source={require('../../assets/images/bg2.png')}
        style={styles.view}>
        <Formik
          initialValues={{ name: '', email: '', password: '', passwordCheck: '' }}
          onSubmit={values => this.register(values)}
        >
          {props =>
            (

              <BlurView tint='light' intensity={90} style={styles.blurview}>
                <View style={styles.container}>
                  <Text style={styles.label}>Name:</Text>
                  <TextInput

                    onChangeText={props.handleChange('name')}
                    onBlur={props.handleBlur('name')}
                    value={props.values.name}
                    style={styles.textfield}

                  />
                  <Text style={styles.label}>E-mail</Text>
                  <TextInput

                    onChangeText={props.handleChange('email')}
                    onBlur={props.handleBlur('email')}
                    value={props.values.email}
                    style={styles.textfield}

                  />
                  <Text style={styles.label}>Password</Text>
                  <TextInput

                    onChangeText={props.handleChange('password')}
                    onBlur={props.handleBlur('password')}
                    value={props.values.password}
                    style={styles.textfield}
                    secureTextEntry={true} />
                  <Text style={styles.label}>Repeat password</Text>
                  <TextInput

                    onChangeText={props.handleChange('passwordCheck')}
                    onBlur={props.handleBlur('passwordCheck')}
                    value={props.values.passwordCheck}
                    style={styles.textfield}
                    secureTextEntry={true} />
                  <Button title='Register' onPress={props.handleSubmit} />
                  <Button title='I already have an account'
                    onPress={() => this.props.navigation.navigate('LogIn')} />
                </View>
              </BlurView>

            )}
        </Formik>
      </ImageBackground >
    );
  }
  register = async (values: any) => {
    const userInput = {
      user:
      {
        name: values.name,
        email: values.email,
        password: values.password,
      }
    }
    const response = await client.mutate({ variables: userInput, mutation: REG });
    this.props.navigation.navigate('LogIn')
  }
}
const styles = StyleSheet.create({
  view: {

    width: '100%',
    height: '100%'
  },
  blurview: {
    minWidth: "100%",
    height: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    minWidth: "100%",
    padding: 10,
    marginTop: "-40%"
  },
  label: {
    fontSize: 30,
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
export default RegisterScreen;