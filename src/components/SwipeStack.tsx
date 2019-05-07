import * as React from 'react';
import { Text, Vibration } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Card from './Card';
import { Function } from '@babel/types';

export interface SwipeStackProps {
  hidden: boolean;
  cards: any;
  onFinish: any;
  onRight: any;
}

const SwipeStack: React.SFC<SwipeStackProps> = (props): any => {
  if (!props.hidden) {
    return (
      <Swiper
        cards={props.cards}
        renderCard={Card}
        cardIndex={0}
        backgroundColor={'none'}
        stackSize={3}
        onSwipedLeft={() => Vibration.vibrate(400)}
        onSwipedRight={props.onRight}
        onSwipedAll={props.onFinish}
        overlayLabelWrapperStyke={{
          position: 'absolute',
          backgroundColor: 'transparent',
          zIndex: 2,
          flex: 1,
          width: '100%',
          height: '100%',
        }}
        overlayLabelStyle={{
          fontSize: 45,
          fontWeight: 'bold',
          borderRadius: 10,
          padding: 10,
          overflow: 'hidden',
        }}
        overlayLabels={{
          right: {
            // element: <Text>LIKE</Text>,
            title: 'RECALL',
            style: {
              label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: 30,
              },
            },
          },
        }}
      />
    );
  }
  return <Text>No cards</Text>;
};

export default SwipeStack;
