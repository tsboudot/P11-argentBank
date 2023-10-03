import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";


const savedState = localStorage.getItem('appState') ? JSON.parse(localStorage.getItem('appState')) : {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: savedState,
  devTools: true
});


store.subscribe(() => {
  localStorage.setItem('appState', JSON.stringify(store.getState()));
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
