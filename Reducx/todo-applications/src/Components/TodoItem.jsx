import React from 'react'
import { useDispatch, } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteTodo, getTodo } from '../Redux/todo/action';

const TodoItem = ({id,name,Course,desc}) => {
    const dispatch=useDispatch()
    // useEffect(()=>{
    //     getTodo(dispatch)
    // },[])

    const handleDelete=()=>{
        console.log("id",id)
        DeleteTodo(dispatch,id)
    }
  return (
    <div key={id}>
        <h1>{name}</h1>
        <h2>{Course}</h2>
        <h3>{desc}</h3>
        <Link to={`/todo/${id}`} >Get More</Link>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TodoItem