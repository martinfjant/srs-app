import * as React from 'react';
import { Text } from 'react-native';
export interface CardProps {
  card: any;
}

export interface CardState {
  open: boolean;
}

class Card extends React.Component<CardProps, CardState> {
  state = { open: true };
  render() {
    return <Text>Kort</Text>;
  }
}

export default Card;
