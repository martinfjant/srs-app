import * as React from 'react';
import { Text, Vibration, Alert } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Card from '../Card';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { client } from '../../../App';

export interface SwipeStackProps {
  hidden: boolean;
  onFinish: any;
  onRight: any;
}

const CARD_QUERY = gql`
  {
    due {
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

  const reveal = (index: number, cards: [any]): void => {
    const answer = cards[index].back;
    Alert.alert(answer);
  }
  return (
    <Query query={CARD_QUERY}>
      {
        ({ data, loading }: any) => {

          if (loading) return <Text>Laddar.</Text>;
          if (Array.isArray(data.due) && data.due.length >= 1) {
            return <Swiper
              cards={data.due}
              renderCard={Card}
              onSwipedRight={(index: number): void => review(index, data.due, 4)}
              onSwipedLeft={(index: number): void => review(index, data.due, 2)}
              stackSize={5}
              verticalSwipe={false}
              backgroundColor={'transparent'}
              onTapCard={(index: number): void => reveal(index, data.due)}
            />;

          }
          else return <Text>No cards due, go add some more!</Text>;

        }
      }
    </Query>
  );
};

export default SwipeStack;
