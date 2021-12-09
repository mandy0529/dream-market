import React, {useContext, useReducer} from 'react';
import {AppReducer} from '../reducer';
import {initialState} from '../reducer/AppReducer';
import {HIDE_SIDEBAR, SHOW_SIDEBAR} from '../utils/action';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const showSidebar = () => {
    dispatch({type: SHOW_SIDEBAR});
  };

  const hideSidebar = () => {
    dispatch({type: HIDE_SIDEBAR});
  };

  return (
    <AppContext.Provider value={{...state, showSidebar, hideSidebar}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
