import {
    ADD_TODO
} from '../action/todos'

import {
    ADD_GOAL
} from '../action/goals'
const check = (store)=>(next)=>(action)=>{
    if(action.type ===ADD_TODO &&
        action.todo.name
            .toLowerCase()
            .includes('bitcoin')){
        return alert("That bad ideal")
    }
    if(action.type===ADD_GOAL
        && action.goal.name
            .includes('bitcoin')){
        return alert("That bad ideal")
    }
    return next(action)
}

export default check