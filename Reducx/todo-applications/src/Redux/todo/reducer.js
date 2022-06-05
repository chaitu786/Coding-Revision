import { ADD_TODO, DELETE_TODO, EDIT_DETAILS, GET_DETAILS, GET_TODO } from "./action"

const init={
    Todos:[],
    status:false
}

export const reducer=(state=init, action)=>{
    switch(action.type){
        case GET_TODO:
            return{
                ...state,
                Todos:action.payload
            }
        case GET_DETAILS:
            return{
                ...state,
                Todos:action.payload
            }
        case EDIT_DETAILS:
            return{
                ...state,
                Todos:action.payload
            }
        case DELETE_TODO:
            return{
                ...state,
                Todos:state.Todos.map((el)=>el.id!==action.payload)
            }
        default:
            return state
    }
}