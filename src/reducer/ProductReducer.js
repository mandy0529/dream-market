import {GRID_VIEW, LIST_VIEW} from '../utils/action';

export const productInitialState = {
  isGridView: true,
  products: [],
};

const ProductReducer = (state, action) => {
  switch (action.type) {
    case GRID_VIEW:
      return {...state, isGridView: true};

    case LIST_VIEW:
      return {...state, isGridView: false};

    default:
      return {...state};
  }
};

export default ProductReducer;
