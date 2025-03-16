import React, { useContext } from 'react'
import './TransactionList.css'
import Transaction from './Transaction'
import { GlobalContext } from '../../Context/GlobalState'
const TransactionList = () => {
  const {transactions}=useContext(GlobalContext)
  return (
    <div className='transctionlist'>
      <h3>History</h3>
      <ul>
      {transactions.map(transaction => (
      <Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  )
}

export default TransactionList
