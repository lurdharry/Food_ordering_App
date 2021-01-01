// In App.js in a new project

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import Onboarding from './Auth/onboarding';

import Login from './Auth/Login';
import Home from './Home/home';
import Details from './Home/Details';
import Menu from './Menu/index';
import Cart from './Cart/index';
import BottomTabNavigator from './tabNav';
const Stack = createStackNavigator();

function Navigation() {
  const {finshedOnboarding} = useSelector(state => state.appReducer);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="onboarding"
        component={finshedOnboarding ? Login : Onboarding}
      />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={BottomTabNavigator} />
      <Stack.Screen name="detail" component={Details} />
      <Stack.Screen name="menu" component={Menu} />
      <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
  );
}

export default Navigation;
