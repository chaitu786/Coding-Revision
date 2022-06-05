import axios from "axios"

export const ADD_TODO="ADD_TODO"
export const DELETE_TODO="DELETE_TODO"
export const EDIT_TODO="EDIT_TODO"
export const GET_TODO="GET_TODO"
export const GET_DETAILS="GET_DETAILS"
export const EDIT_DETAILS="EDIT_DETAILS"




export const getTodo=(dispatch)=>{
    axios({
        url:"http://localhost:8080/Todos",
        method:"GET"
    })
    .then((res)=>{
        dispatch({
        type:GET_TODO,
        payload:res.data
        })
    })
}

export const getdetails=({dispatch,id})=>{
    axios({
        url:`http://localhost:8080/Todos/${id}`,
        method:"GET"
    })
    .then((res)=>{
        dispatch({
        type:GET_DETAILS,
        payload:res.data
        })
    })
}

export const editData=({text,dispatch,id})=>{ 
    axios({
        url:`http://localhost:8080/Todos/${id}`,
        method:"PATCH",
        data:{
            desc:text
        }
    })
    .then((res)=>{
        // console.log(res)
        dispatch({
        type:EDIT_DETAILS,
        payload:res.data
        })
    })
}
export const addTodo=(dispatch)=>{
    axios({
        url:"http://localhost:8080/Todos",
        method:"POST"
    
    })
    .then((res)=>{
        dispatch({
            type:ADD_TODO,
            payload:res.data
        })
    })
}

export const DeleteTodo=(dispatch,id)=>{
    console.log("action",id)
    axios({
        url:`http://localhost:8080/Todos/${id}`,
        method:"DELETE"
    
    })
    .then((res)=>{
        dispatch({
            type:DELETE_TODO,
            payload:res.data
        })
    })
}



