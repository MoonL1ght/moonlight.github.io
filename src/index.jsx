import * as React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import configureStore from './app/redux/store/configureStore.jsx';
const store = configureStore();

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);