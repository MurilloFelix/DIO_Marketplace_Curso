import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux'

import Routes from './src/routes/routes';

import store from './src/Store'

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#312e38"/>
      <Routes />
    </Provider>
  )
};

export default App;
