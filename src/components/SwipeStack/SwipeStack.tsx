import * as React from 'react';
import { Text, Vibration } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Card from '../Card';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export interface SwipeStackProps {
  hidden: boolean;
  cards: any;
  onFinish: any;
  onRight: any;
}

const CARD_QUERY = gql`
  {
    cards {
      id,
      front,
      back
    }
  }
`;

const SwipeStack: React.FunctionComponent<SwipeStackProps> = (props: SwipeStackProps): any => {
  return (
    <Query query={CARD_QUERY}>
      {
        ({ data, loading }: any) =>
        {
          if (loading) return <Text>Laddar.</Text>;
          if (!loading) {
            <Swiper
              cards={data.cards}
              renderCard={Card}
              onSwipedRight={props.onRight}
            />;

          }
        }
      }
    </Query>
  );
};

export default SwipeStack;
