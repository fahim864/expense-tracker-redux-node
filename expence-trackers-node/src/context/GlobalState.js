import React, {createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State

const initialState = {
    transactions: []
}

export const GlobalContaxt = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Action 
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (
        <GlobalContaxt.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContaxt.Provider>
        );
}