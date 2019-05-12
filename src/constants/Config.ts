/* Imports the enviroment variables using some magic*/
import { JWT } from 'react-native-dotenv';

/*Export them as objects with typings*/
const config = Object.freeze({
  jwt: (JWT as string) || '',
  api: '',
});
