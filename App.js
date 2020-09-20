/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware } from 'redux-api-middleware';

import reducers from './app/store/reducers'
import AppNavigationContainer from './app/navigation/AppNavigationContainer';

import thunk from 'redux-thunk'; //Thunk middleware for Redux


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/*
    redux-api-middleware uses the Fetch API to make the API call.
    [RSAA].body should hence be a valid body according to the fetch specification.
    In most cases, this will be a JSON-encoded string or a FormData object.
    It may also be a function taking the state of your Redux store as its argument, and returning a body as described above.
*/

/*
 *compose* is a functional programming utility, and is included in Redux as a convenience to apply several store enhancers in a row
 */

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(apiMiddleware, thunk)
  )
);



const App = () => {
  return (
    <Provider store={store}>
      <AppNavigationContainer />
    </Provider>
  );
};

export default App;
