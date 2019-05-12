import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AddCardScreen from '../screens/AddCardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TabBar from './TabBar';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Review',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-albums' : 'md-information-circle'}
    />
  ),
};

const AddCardStack = createStackNavigator({
  AddCard: AddCardScreen,
});

AddCardStack.navigationOptions = {
  tabBarLabel: 'Add',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cog' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator(
  {
    HomeStack,
    AddCardStack,
    SettingsStack,
  },
  {
    tabBarComponent: TabBar,
  },
);
