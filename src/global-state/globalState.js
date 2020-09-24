import React, { createContext, useReducer } from "react";
import { AppReducer } from "./appReducer";
import types from "./types";

const initialState = {
  transactions: [
    {
      id: "2",
      text: "cash",
      amount: 200,
    },
    {
      id: "1",
      text: "flower",
      amount: -200,
    },
    {
      id: "3",
      text: "raise",
      amount: 400,
    },
    {
      id: "4",
      text: "flower",
      amount: -200,
    },
  ],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({
      type: types.DELETE_TRANSACTION,
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: types.ADD_TRANSACTION,
      payload: transaction,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
