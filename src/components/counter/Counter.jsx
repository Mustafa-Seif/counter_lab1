import React, { useState } from 'react'
import CounterAction from '../counter_action/CounterAction'
import './Counter.css'


const Counter = () => {
    const[count,setCount]=useState(0);
    let increaseCount = ()=>{
      setCount(count +1)
    }
    let decreaseCount = ()=>{
      setCount(count -1)

    }
  return (
    <div className='counter'>
        <h1>{count}</h1>
        <CounterAction in={increaseCount} de={decreaseCount} />
    </div>
  )
}

export default Counter