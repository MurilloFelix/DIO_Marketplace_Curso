import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import Routes from './src/routes/routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312e38"/>
      <Routes />
    </>
  )
};

export default App;
