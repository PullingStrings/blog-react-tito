import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//Redux Store
import { Provider } from 'react-redux';
import { configureStore } from '../src/store';
import { loadBlog, loadMusic } from './store/Blog';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadBlog());
store.dispatch(loadMusic());

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
