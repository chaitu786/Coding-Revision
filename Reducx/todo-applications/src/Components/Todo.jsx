import React, { useEffect } from 'react'
import { getTodo } from '../Redux/todo/action'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { DeleteTodo } from '../Redux/todo/action'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'

const Todo = () => {
    const todos=useSelector((state)=>state.Todos)
    const dispatch=useDispatch()

    // console.log(todos);

    useEffect(()=>{
        getTodo(dispatch)
    },[])
    
  return (
    <div>
        <TodoInput/>
        {
            todos.map((el)=>( 
                <div key={el.id}>
                    <TodoItem key={el.id} {...el}/>
                    {/* <h1>{el.name}</h1>
                    <h2>{el.Course}</h2>
                    <Link to={`/todo/${el.id}`} >Get More</Link>
                    <button onClick={deleteTodo(el.id)}>Delete</button> */}
                </div>
            ))
        }
    </div>
  )
}

export default Todo