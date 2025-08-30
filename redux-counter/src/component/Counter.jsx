import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';



const Counter = () => {

  const count = useSelector( (state) => state.counter.value );
  const dispatch  = useDispatch();

  return (
    <div className='w-11/12 h-screen flex justify-center items-center '>
    <div className='flex items-center  border-4 border-orange-700  rounded-2xl '>
     <button 
     className='mr-10 font-bold text-purple-700 border-r-4 px-5'
     onClick={() => dispatch(increment())}
      >
        Increment
     </button>
     <br/>
     <br/>

     <div className='font-bold text-blue-500'>{count}</div>

      <br/>
     <br/>
      <button
      className='ml-10 font-bold text-purple-700 border-l-4 px-5'
       onClick={() => dispatch(decrement())}
      >
        Decrement
     </button>

</div>
    </div>
  )
}

export default Counter
