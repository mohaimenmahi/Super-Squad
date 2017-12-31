import React from 'react';
import ReactDOM from 'react-dom';
import { addCharacterById } from './actions';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);
console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
