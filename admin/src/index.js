import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import {store, persistor} from './redux/store.js'
import { PersistGate } from 'redux-persist/es/integration/react.js'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading='null' persistor={persistor}>
      <App />
      
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
