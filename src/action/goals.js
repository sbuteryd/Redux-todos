import API from 'goals-todos-api'

const ADD_GOAL ='ADD_GOAL'
const REMOVE_GOAL ='REMOVE_GOAL'


//action
function addGoal(goal) {
    return {
        type:ADD_GOAL,
        goal
    }
}


function removeGoal(id) {
    return {
        type:REMOVE_GOAL,
        id
    }
}

//thunk

export function handleGoal(goal) {
    return (dispatch)=>{
        API.saveGoal(goal).then((goal)=>{
            dispatch(addGoal(goal))
        }).catch(()=>{
            alert("失败添加请重试")
        })
    }
}


export function handleRemoveGoal(goal) {
    return (dispatch)=>{
        dispatch(removeGoal(goal.id))
        API.deleteGoal(goal.id).catch(()=>{
            dispatch(addGoal(goal))
            alert("错误添加请重试")
        })
    }
}
