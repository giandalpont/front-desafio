import './Assets/css/global.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
