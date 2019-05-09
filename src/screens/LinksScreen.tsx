import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
const TEST_QUERY = gql`
  {
    cards {
      id,
      front,
      back
    }
  }
`;

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Query query={TEST_QUERY}>
          {({ data, loading }) => loading 
          ? <Text>Laddar.</Text> 
          : data.cards.map(card => <Text key={card.id}>{card.front}</Text>)}
        </Query>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
