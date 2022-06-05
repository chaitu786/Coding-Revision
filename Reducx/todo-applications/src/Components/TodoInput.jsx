import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const TodoInput = () => {
    const [text,setText]=useState()
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        let name=e.target.name
        let data={
            [name]:e.target.value,

        }
        setText(data)

    }
    const handlePost=()=>{
        console.log(text);
       
    }

  return (
    <div>
        <input type="text" placeholder='something You want' name='name' onChange={handleChange}/>
        <input type="text" placeholder='something You want' name='Course' onChange={handleChange}/>
        <input type="text" placeholder='something You want' name='desc' onChange={handleChange}/>
        <button onClick={handlePost}>Button</button>
    </div>
  )
}

export default TodoInput