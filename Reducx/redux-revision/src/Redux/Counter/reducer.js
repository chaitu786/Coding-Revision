import { DECREMENT, INCREMENT } from "./action"

const init={
    count:0
}

export const reducer=(state=init,action)=>{
    switch(action.type){
        case INCREMENT:{
            return{
                ...state,
                count:state.count+action.payload
            }
        }
        case DECREMENT:{
            return{
                ...state,
                count:state.count+action.payload
            }
        }
        default:
            return state
    }
}