
import React from 'react';
import { Provider } from 'react-redux';
import Layout from './layout';
import { createStore, applyMiddleware }  from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
// const store = createStore(rootReducer);
const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;