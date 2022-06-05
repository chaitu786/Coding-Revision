import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editData } from '../Redux/todo/action'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
  const navigate=useNavigate()
    const dispatch=useDispatch()
    const {id}=useParams()
    const [text,setText]=useState('')
    const submit=()=>{
      editData({text,dispatch,id})
      navigate("/todo")
    }
  return (
    <div>
        <input type="text" placeholder='modify like u want' onChange={(e)=>setText(e.target.value)}/>
        <button onClick={submit}>submit</button>
    </div>
  )
}

export default Edit