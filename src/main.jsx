import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

// Stores
import store from "./redux/store";

// Comonents
import App from './App';

// Styles
import './reset.css';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </Provider>
);
