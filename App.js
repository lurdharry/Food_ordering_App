import React from 'react';
import {StatusBar} from 'react-native';
import * as Colors from './scr/common/colors';

import Onboarding from './scr/screens/Auth/onboarding';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.White} />
      <Onboarding />
    </>
  );
};

export default App;
