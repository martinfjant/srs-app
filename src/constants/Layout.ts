import { Dimensions } from 'react-native';

const width: number = Dimensions.get('window').width;
const height: number = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
