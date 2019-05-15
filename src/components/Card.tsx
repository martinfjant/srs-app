import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export interface CardProps {
  card: any;
  index: number;
  turned: boolean;
}

export interface CardState {
  open: boolean;
}

const Card = (card: any, index: number): React.ReactElement => {
  return (
    <View style={styles.card} key={card.id}>
      <Text style={styles.text}>{card.front}</Text>
      {/* <Text style={styles.text}>{card.back}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A7A7AA',
    justifyContent: 'center',
    backgroundColor: 'white',
    maxHeight: 400,
    marginTop: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 35,
    backgroundColor: 'transparent',
  },
});
export default Card;
