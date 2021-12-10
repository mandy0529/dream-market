import React, {useContext, useReducer} from 'react';
import ProductReducer, {productInitialState} from '../reducer/ProductReducer';
import {GRID_VIEW, LIST_VIEW} from '../utils/action';

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

  return (
    <ProductContext.Provider value={{...state, gridView, listView}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export default ProductProvider;
