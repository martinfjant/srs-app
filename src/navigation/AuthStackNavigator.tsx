import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LogInScreen';

const AuthStack = createStackNavigator({ LogIn: LoginScreen });
export default AuthStack;
