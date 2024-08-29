import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './Actions/index';
const App = () => {
  const myState = useSelector ((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  
  return (
    <>
    <div className=' '>
        <div>
        <h1 className='text-center font-bold text-[50px]'>Increment / Decrement counter </h1>
        </div>
      
   

    <div className='flex items-center justify-center quantitty mt-5'>
      <a className='quentity_minus border border-black-[700] rounded bg-slate-300 p-5 text-[30px] font-bold' title="Decrement" onClick={ ()=> dispatch (decNumber())}><span>-</span></a>
      <input name="quentity" type="text" className='quentity_input border border-black-[900] p-5 w-[80px] text-[30px] text-center text-[#000]' value={myState}/>
      <a className='quentity_minus border border-black-[700] rounded bg-slate-300 p-5 text-[30px] font-bold' title="Increment" onClick={ ()=>dispatch(incNumber())}><span>+</span></a>
    </div>

    </div>

    </>
  )
}

export default App