// In App.js in a new project

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './Auth/onboarding';
import Login from './Auth/Login';
import Home from './Home/home';
import Details from './Home/Details';
import Menu from './Menu/index';
const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="onboarding" component={Onboarding} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="detail" component={Details} />
      {/* <Stack.Screen name="menu" component={Menu} /> */}
    </Stack.Navigator>
  );
}

export default Navigation;
