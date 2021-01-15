// import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import Navigation from './scr/screens/navigation';
import {persistor, store} from './scr/store';
import {PersistGate} from 'redux-persist/integration/react';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
