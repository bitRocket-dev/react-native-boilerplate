/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { Main } from './components-shared/Main';
import { ReduxProvider } from './redux/Provider';

export const App = () => (
  <ReduxProvider>
    <Main />
  </ReduxProvider>
);
