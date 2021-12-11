import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_LOADING,
  UPDATE_FILTER,
} from '../utils/action';

export const filterInitialState = {
  all_products: [],
  filltered_products: [],
  filtered_loading: true,
  filter: {
    category: '모든꿈',
    price: 0,
    min_price: 0,
    max_price: 0,
  },
};

const FilterReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, filtered_loading: true};

    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((item) => {
        return item.price;
      });
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filltered_products: [...action.payload],
        filter: {...state.filter, max_price: maxPrice, price: maxPrice},
      };

    case UPDATE_FILTER:
      const {name, value} = action.payload;
      return {
        ...state,
        filter: {...state.filter, [name]: value},
        filtered_loading: false,
      };

    case FILTER_PRODUCTS:
      const {
        all_products,
        filter: {category, price},
      } = state;
      let allProducts = [...all_products];
      if (category !== '모든꿈') {
        allProducts = allProducts.filter((item) => {
          return item.category === category;
        });
      }
      allProducts = allProducts.filter((item) => {
        return item.price <= price;
      });
      return {
        ...state,
        filltered_products: allProducts,
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        filter: {
          ...state.filter,
          category: '모든꿈',
          price: state.filter.max_price,
        },
      };

    default:
      return {...state};
  }
};

export default FilterReducer;
