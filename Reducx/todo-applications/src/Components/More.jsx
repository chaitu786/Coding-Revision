import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getdetails } from '../Redux/todo/action'

import { Link } from 'react-router-dom'

const More = () => {
    const dispatch=useDispatch()
    const {id}=useParams()
    const data=useSelector((state)=>state.Todos)
    let arr=[]
    arr.push(data)

    useEffect(()=>{
        getdetails({dispatch,id})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])
    console.log(data);
  return (
    <div>
        {
            arr.map((el)=>( 
                <div key={el.id}>
                    <h1>{el.name}</h1>
                    <h2>{el.Course}</h2>
                    <h3>{el.desc}</h3>
                    <Link to={`edit`}><button>Edit</button></Link>
                </div>
            ))
        }

    </div>
  )
}

export default More