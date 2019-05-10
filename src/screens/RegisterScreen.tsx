import * as React from 'react';
import { Formik } from 'formik'
import { View, TextInput, Button } from 'react-native';

export interface RegisterScreenProps {

}

export interface RegisterScreenState {

}

class RegisterScreen extends React.Component<RegisterScreenProps, RegisterScreenState> {
  constructor(props: RegisterScreenProps) {
    super(props);
    this.state = { foo: true };
  }
  render() {
    return (
      <View>
        <Formik
          initialValues={{ email: '', password: '', passwordCheck: '' }}
          onSubmit={values => this.register(values)}
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
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={props.handleChange('passwordCheck')}
                  onBlur={props.handleBlur('passwordCheck')}
                  value={props.values.passwordCheck}

                  secureTextEntry={true} />
                <Button title='Register' onPress={props.handleSubmit} />
                <Button title='I already have an account' onPress={() => console.log('register')} />
              </View>
            )}
        </Formik>
      </View >
    );
  }
  register = async (values: any) => {
    const userInput = {
      email: values.email,
      password: values.password,
    }
  }
}

export default RegisterScreen;