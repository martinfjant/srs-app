import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LogInScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthStack = createStackNavigator({ LogIn: LoginScreen, Register: RegisterScreen });
export default AuthStack;
