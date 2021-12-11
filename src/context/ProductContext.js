import React, {useContext, useEffect, useReducer} from 'react';
import ProductReducer, {productInitialState} from '../reducer/ProductReducer';
import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_ERROR,
  GET_SINGLE_PRODUCTS,
  GRID_VIEW,
  LIST_VIEW,
  PRODUCTS_LOADING,
  SINGLE_LOADING,
} from '../utils/action';
import {ALL_API} from '../utils/api';

const ProductContext = React.createContext();

const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(ProductReducer, productInitialState);

  const gridView = () => {
    console.log('grid view');
    dispatch({type: GRID_VIEW});
  };

  const listView = () => {
    console.log('list view');
    dispatch({type: LIST_VIEW});
  };

  const fetchProducts = async (url) => {
    dispatch({type: PRODUCTS_LOADING});
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({type: GET_PRODUCTS, payload: data});
    } catch {
      dispatch({type: GET_PRODUCTS_ERROR});
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({type: SINGLE_LOADING});
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({type: GET_SINGLE_PRODUCTS, payload: data});
    } catch {
      dispatch({type: GET_SINGLE_ERROR});
    }
  };

  useEffect(() => {
    fetchProducts(ALL_API);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...state,
        gridView,
        listView,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export default ProductProvider;
