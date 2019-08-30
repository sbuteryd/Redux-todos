import API from 'goals-todos-api'
const RECEIVE_DATA ='RECEIVE_DATA'



// action
function receiveData(todos,goals) {
    return {
        type:'RECEIVE_DATA',
        todos,
        goals
    }
}


//thunk
export function handleReceive() {
    return (dispatch)=>{
        Promise.all([API.fetchTodos(),API.fetchGoals()]).then(([todos,goals])=>{
            dispatch(receiveData(todos,goals))
        })
    }
}