import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'mobx-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataStore from './componets/stores/DataStore';

const stores = {
  dataStore: new DataStore(),
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
