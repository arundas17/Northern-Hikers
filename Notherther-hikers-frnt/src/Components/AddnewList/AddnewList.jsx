import React, { useContext, useState } from 'react';
import './AddnewList.css';
import { GlobalContext } from '../../Context/GlobalState';

const AddnewList = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

   

    if (text.trim() === '') {
      alert('Please enter a transaction name.');
      return;
    }
  

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <div className='addnewlist'>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='formcontrol'>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text here..."
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='formcontrol'>
          <label htmlFor="amount">
            Amount <br />
            (Negative = Expense, Positive = Income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : '')}
          />
        </div>
        <button className='submit-btn'>Add Latest Transaction</button>
      </form>
    </div>
  );
};

export default AddnewList;
