import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transaction: [
    { id: 1, text: 'water', amount: 0 },
    { id: 2, text: 'Glows', amount: 0},
    { id: 3, text: 'Backpack', amount: 0},
    { id: 4, text: 'Ticks', amount: 0 },
  ]
};

// ✅ Create Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
//    actions
  const deleteTransaction=(id)=>{
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    })
  }
  const addTransaction=(transaction)=>{
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction
    })
  }
  return (
    <GlobalContext.Provider value={{ transactions: state.transaction,
        deleteTransaction,addTransaction
     }}>
      {children}
    </GlobalContext.Provider>
  );
};
