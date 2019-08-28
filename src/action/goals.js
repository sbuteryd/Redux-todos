import API from 'goals-todos-api'
export const ADD_GOALS ='ADD_GOALS';
export const REMOVE_GOALS ='ADD_GOALS';




export function addGoal(goal) {
    return {
        type:ADD_GOALS,
        goal
    }
}

export function removeGoal(id) {
    return {
        type: REMOVE_GOALS,
        id
    }
}


export function handleAddGoal(name,cb) {
    return (dispatch)=>{
        return API.saveGoal(name).then((name)=>{
            dispatch(addGoal(name))
            cb()
        }).catch(()=>{
            alert("错误添加请重试")
        })
    }
}
