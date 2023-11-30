import React, { createContext, useReducer } from 'react';
export const MyContext = createContext();

const CHANGE_THEME = 'CHANGE_THEME';
const SET_DATA = 'SET_DATA';

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const MyProvider = ({ children }) => {
  const initialState = {
    theme: 'light',
    data: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};
