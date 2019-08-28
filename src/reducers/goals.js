import {ADD_GOALS,REMOVE_GOALS} from '../action/goals'
import {RECEIVE_DATA} from '../action/share'


function goals(state=[],action) {
    switch (action.type) {
        case ADD_GOALS:
            return state.concat([action.goal])
        case REMOVE_GOALS:
            return state.filter((goal) => goal.id !== action.id)
        case RECEIVE_DATA:
            return  action.goals
        default:
            return state
    }
}

export default goals
