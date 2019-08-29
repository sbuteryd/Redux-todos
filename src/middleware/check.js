import {
    ADD_TODO
} from '../action/todos'
import {
    ADD_GOALS
} from '../action/goals'

const check = (store)=>(next)=>(action)=>{
    if(action.type ===ADD_TODO
        && action.todo.name
            .toLowerCase()
            .includes('bitcoin')){
        return alert('That is bad ideal')
    }
    if(action.type ===ADD_GOALS && action.goal.name.toLowerCase().includes('bitcoin')){
        return  alert("That is bad ideal")
    }
    return next(action)
}

export default check