import {HIDE_SIDEBAR, SHOW_SIDEBAR} from '../utils/action';

export const initialState = {
  isOpen: false,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return {...state, isOpen: true};

    case HIDE_SIDEBAR:
      return {...state, isOpen: false};

    default:
      return {...state};
  }
};

export default AppReducer;
