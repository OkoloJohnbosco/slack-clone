import React, { useReducer, createContext, useContext } from "react";

export const StateContext = createContext();

const StateProvider = ({ children, reducer, initialState }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export default StateProvider;

export const useStateValue = () => useContext(StateContext);
