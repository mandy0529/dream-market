import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppProvider, CartProvider} from './context';
import ProductProvider from './context/ProductContext';
import FilterProvider from './context/FilterContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <FilterProvider>
        <AppProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AppProvider>
      </FilterProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
