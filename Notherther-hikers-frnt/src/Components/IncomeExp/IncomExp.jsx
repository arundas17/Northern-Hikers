import React, { useContext } from 'react'
import './IncomeExp.css'
import { GlobalContext } from '../../Context/GlobalState'
const IncomExp = () => {
  const {transactions}=useContext(GlobalContext)
  const amounts=transactions.map((transaction)=>transaction.amount);
  const income=amounts.filter(item=>item>0).reduce((acc,item)=>(acc+item),0).toFixed(2);
  const expence=amounts.filter(item=>item<0).reduce((acc,item)=>acc-item,0)*(-1).toFixed(2);
  return (
    <div className='icomeExp'>
      <div className="incomexp-container">
        <div className='icomeExp-income'>
            <h4>
                income
            </h4>
            <p className='money-plus' id='money-plus'>+${income}</p>
        </div>
        <div className='barrier'></div>
        <  div className='icomeExp-Expence'>
        <h4>
               expence
            </h4>
            <p className='money-minus' id='money-minus'>+${expence}</p>
        </div>
      </div>
    </div>
  )
}

export default IncomExp
