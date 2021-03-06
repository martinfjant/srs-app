import * as React from 'react';
import { Text, Vibration } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Card from '../Card';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { client } from '../../../App';

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

const REV = gql`
mutation ($reviewData: ReviewInput!, $id: Float!) {
    addReview(
      reviewData: $reviewData,
      id: $id
      ){
        id
        }
}
`;

// client.mutate({ mutation: REV });

const SwipeStack: React.FunctionComponent<SwipeStackProps> = (props: SwipeStackProps): any => {

  const review = (index: number, cards: [any], answer: number): void => {
    /* Make an array with only the card id's as values" */
    const idmap = cards.map(card => card.id);
    /* The callback sends the cards position in the array, use that to get the id*/
    const card = idmap[index];
    /* Make the reviewData object, nota bene, the plus sign is type coercion
      without which, the id will be sent as a string */
    const review = {
      reviewData:
      {
        answer,
        card,
      },
      id: +card,
    };
    /* And send! */
    client.mutate({ variables: review, mutation: REV });
  };
  return (
    <Query query={CARD_QUERY}>
      {
        ({ data, loading }: any) => {

          if (loading) return <Text>Laddar.</Text>;
          if (!loading) {
            return <Swiper
              cards={data.cards}
              renderCard={Card}
              onSwipedRight={(index: number): void => review(index, data.cards, 4)}
              onSwipedLeft={(index: number): void => review(index, data.cards, 2)}
            />;

          }
        }
      }
    </Query>
  );
};

export default SwipeStack;
