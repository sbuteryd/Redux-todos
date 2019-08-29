import {RECEIVE_DATA} from '../action/share'



function loading(state=true,action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return state =false
        default:
            return  state
    }
}

export default loading