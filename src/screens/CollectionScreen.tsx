import * as React from 'react';
import { Text, View } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const CARD_QUERY = gql`
  {
    cards {
      id,
      front,
      back,
      scheduled
    }
  }
`;

export interface CollectionScreenProps {

}

export interface CollectionScreenState {

}

class CollectionScreen extends React.Component<CollectionScreenProps, CollectionScreenState> {

  render() {
    return (
      <View>
        <Text>All cards</Text>
        <Query query={CARD_QUERY}>
          {({ data, loading }: any): any => {
            if (loading) return <Text>Loading...</Text>;
            {
              if (!loading) {
                return data.cards.map((card: any): any => {
                  return <Text key={card.id}>{card.front} is scheduled {card.scheduled}</Text>;
                })
              }
            }
          }}
        </Query>
      </View>);
  }
}

export default CollectionScreen;