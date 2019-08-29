import API from 'goals-todos-api'

export const ADD_GOALS ='ADD_GOALS';
export const REMOVE_GOALS ='REMOVE_GOALS';



function addGoal(goal) {
    return {
        type:ADD_GOALS,
        goal
    }
}

export function removeGoal(id) {
    return {
        type:REMOVE_GOALS,
        id
    }
}


export function handleAddGoal(goal,cb) {
    return (dispatch)=>{
        return API.saveGoal(goal).then((goal)=>{
            dispatch(addGoal(goal))
            cb()
        }).catch(()=>{
            alert("错误添加请重试")
        })
    }
}


export function handleDeleteGoal(goal) {
    return (dispatch)=>{
        dispatch(removeGoal(goal.id))
        return API.deleteGoal(goal.id).catch(()=>{
            dispatch(addGoal(goal))
            alert("错误添加请重试")
        })
    }
}