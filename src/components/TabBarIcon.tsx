import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
interface IPropsTypes {
  name: string;
  focused: boolean;
}

export default class TabBarIcon extends React.Component<IPropsTypes> {
  render() {
    const color = this.props.focused
      ? Colors.tabIconSelected
      : Colors.tabIconDefault;
    return (
      <Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={color}
      />
    );
  }
}
