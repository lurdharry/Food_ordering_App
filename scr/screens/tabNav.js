import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home/home';
import {CustomTabBar} from '../common';

const Tab = createBottomTabNavigator();

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
