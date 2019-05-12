import * as React from 'react';
import { Formik } from 'formik'
import { View, TextInput, Button, Text } from 'react-native';
import { client } from '../../App';
import gql from 'graphql-tag';

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

class RegisterScreen extends React.Component<RegisterScreenProps, RegisterScreenState> {
  constructor(props: RegisterScreenProps) {
    super(props);
    this.state = { foo: true };
  }
  render() {
    return (
      <View>
        <Formik
          initialValues={{ name: '', email: '', password: '', passwordCheck: '' }}
          onSubmit={values => this.register(values)}
        >
          {props =>
            (
              <View>
                <Text>Name:</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={props.handleChange('name')}
                  onBlur={props.handleBlur('name')}
                  value={props.values.name}

                />
                <Text>E-mail</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}

                />
                <Text>Password</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}

                  secureTextEntry={true} />
                <Text>Repeat password</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={props.handleChange('passwordCheck')}
                  onBlur={props.handleBlur('passwordCheck')}
                  value={props.values.passwordCheck}

                  secureTextEntry={true} />
                <Button title='Register' onPress={props.handleSubmit} />
                <Button title='I already have an account' onPress={() => this.props.navigation.navigate('LogIn')} />
              </View>
            )}
        </Formik>
      </View >
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

export default RegisterScreen;