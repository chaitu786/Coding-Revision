import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrementCounter, incrementCounter } from '../Redux/Counter/action'

const Counter = () => {
    const counter=useSelector((state)=>state.count)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch(incrementCounter(5))}>ADD</button>
        <button onClick={()=>dispatch(decrementCounter(4))}>REDUCER</button>
    </div>
  )
}

export default Counter