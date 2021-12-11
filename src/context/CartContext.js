import React, {useContext, useEffect, useReducer} from 'react';
import {CartReducer} from '../reducer';
import {cartInitialState, CART_LOCAL} from '../reducer/CartReducer';
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTAL,
  HANDLE_CART_ITEM_AMOUNT,
  REMOVE_ITEM,
} from '../utils/action';

const CartContext = React.createContext();

const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, cartInitialState);

  const addToCart = (id, number, data) => {
    const amount = Number(number);
    dispatch({type: ADD_TO_CART, payload: {id, amount, data}});
  };

  const clearCartItem = () => {
    dispatch({type: CLEAR_CART});
  };

  const handleCart = (id, stock, type) => {
    console.log('handle cart!');
    dispatch({type: HANDLE_CART_ITEM_AMOUNT, payload: {id, type, stock}});
  };

  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload: id});
  };

  const calculatedItem = () => {
    dispatch({type: COUNT_CART_TOTAL});
  };

  useEffect(() => {
    calculatedItem();
    localStorage.setItem(CART_LOCAL, JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{...state, addToCart, clearCartItem, handleCart, removeItem}}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartProvider;
