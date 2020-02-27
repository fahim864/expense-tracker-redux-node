
import React, { useContext } from 'react';
import { Transaction } from './Transaction';


import { GlobalContaxt } from '../context/GlobalState';

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContaxt);

    

    return(
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction = {transaction}/>
                ))}
                
            </ul>
        </div>
    )
};