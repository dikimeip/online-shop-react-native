/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Routers from './src/configs/route'
import { Provider } from 'react-redux';
import { store } from './src/configs/Redux/Store';

const App  = () => {
  return (
    <Provider store={store}>
       <Routers/>
    </Provider>
       
  );
};

export default App;
