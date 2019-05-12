import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import gql from 'graphql-tag';
import { client } from '../../App';

const ADD = gql`
mutation addCard($card: CardInput!) {
  addCard(cardData: $card) {
    id,
  }
}
`;


class AddCardScreen extends React.Component<any> {
  static navigationOptions = {
    title: 'Add card',
  };
  render() {
    return (
      <View>
        <Formik
          initialValues={{ front: '', back: '' }}
          onSubmit={values => this.addAsync(values)}>
          {props =>
            (
              <View>
                <Text>Front:</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={props.handleChange('front')}
                  onBlur={props.handleBlur('front')}
                  value={props.values.front}
                />
                <Text>Back:</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={props.handleChange('back')}
                  onBlur={props.handleBlur('back')}
                  value={props.values.back}
                />
                <Button
                  title='Add!'
                  onPress={props.handleSubmit}
                />
              </View>
            )}
        </Formik>
      </View>
    );
  }

  addAsync = async (values: any) => {
    const { front, back } = values;
    const card = {
      card: {
        front,
        back,
      },
    };
    await client.mutate({ variables: card, mutation: ADD });
    this.props.navigation.navigate('Home');

  }
}

export default AddCardScreen;
