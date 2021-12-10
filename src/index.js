import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppProvider} from './context';
import ProductProvider from './context/ProductContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
