import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import Home from './Home/home';
import {CustomTabBar} from '../common';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Cart" component={Home} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
