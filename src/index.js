// import './init-rum.js';
import { datadogRum } from '@datadog/browser-rum';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

datadogRum.init({
  applicationId: '32cfae72-f4a0-4090-8e55-891872619b37',
  clientToken: 'pub1121f959d17192baf886605834f1e298',
  site: 'datadoghq.com',
  service: 'travel-app',
  env: 'staging',
  version: '1.0.0',
  sampleRate: 100,
  trackInteractions: true
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
