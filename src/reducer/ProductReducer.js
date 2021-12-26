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

export const productInitialState = {
  isGridView: true,
  products_loading: true,
  products_error: false,
  products: [],
  single_loading: false,
  single_error: false,
  singleProduct: [],
};

const ProductReducer = (state, action) => {
  switch (action.type) {
    case GRID_VIEW:
      return {...state, isGridView: true};

    case LIST_VIEW:
      return {...state, isGridView: false};

    case PRODUCTS_LOADING:
      return {...state, products_loading: true};

    // all products
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        products_loading: false,
      };

    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        products_error: true,
        products_loading: false,
      };

    // single product
    case SINGLE_LOADING:
      return {...state, single_loading: true, single_error: false};

    case GET_SINGLE_PRODUCTS:
      return {
        ...state,
        single_loading: false,
        singleProduct: action.payload,
      };

    case GET_SINGLE_ERROR:
      return {
        ...state,
        single_error: true,
        single_loading: false,
      };

    default:
      return {...state};
  }
};

export default ProductReducer;
