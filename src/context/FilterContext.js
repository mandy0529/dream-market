import React, {useContext, useEffect, useReducer} from 'react';
import FilterReducer, {filterInitialState} from '../reducer/FilterReducer';
import {useProductContext} from './ProductContext';
import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_LOADING,
  UPDATE_FILTER,
} from '../utils/action';

const FilterContext = React.createContext();

const FilterProvider = ({children}) => {
  const {products} = useProductContext();
  const [state, dispatch] = useReducer(FilterReducer, filterInitialState);

  const updateFilter = (e) => {
    dispatch({type: SET_LOADING});
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'price') {
      value = Number(value);
    }
    dispatch({type: UPDATE_FILTER, payload: {name, value}});
  };

  const clearFilter = () => {
    dispatch({type: CLEAR_FILTERS});
  };

  useEffect(() => {
    dispatch({type: LOAD_PRODUCTS, payload: products});
  }, [products]);

  useEffect(() => {
    dispatch({type: FILTER_PRODUCTS});
  }, [state.filter]);

  return (
    <FilterContext.Provider value={{...state, clearFilter, updateFilter}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
