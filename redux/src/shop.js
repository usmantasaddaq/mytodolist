import React from 'react'
import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

export const Shop = () => {

  const dispatch = useDispatch();
  const deposit =()=>{
    dispatch(actionCreators.depositMoney(100))
  }
  const withdraw =()=>{
    console.log("called");
    dispatch(actionCreators.WithdrawMoney(100))
  }

  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
        <button className='btn btn-primary mx-2' onClick={ withdraw}>- </button>
       Update Balance
        <button className='btn btn-primary mx-2' onClick={ deposit}>+</button>
    </div>
  )
}
export default Shop; 
