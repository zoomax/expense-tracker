import types from "./types";

export const AppReducer = (state = {}, action) => {
  switch (action.type) {
    case types.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => {
          return transaction.id !== action.payload;
        }),
      };
    case types.ADD_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.concat(action.payload),
      };
    default:
      return state;
  }
};
