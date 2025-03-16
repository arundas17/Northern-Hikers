import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';

const Transaction = ({ transaction }) => {  // ✅ Fix destructuring
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransaction}=useContext(GlobalContext)
    return (
        <li className={transaction.amount<0?'minus' :'plus'}>
            {transaction.text}   <span>{sign}${Math.abs(transaction.amount)}</span>  
            <button className='delete-button' onClick={()=>deleteTransaction(transaction.id)}>x</button>
        </li>
    );
}

export default Transaction;
