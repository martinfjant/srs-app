import React from 'react';
import { Text, TextStyle } from 'react-native';

interface IPropsTypes {
  style: TextStyle;
}

export class MonoText extends React.Component<IPropsTypes> {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: 'space-mono' }]}
      />
    );
  }
}
