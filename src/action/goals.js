import API from 'goals-todos-api'
export const ADD_GOALS ='ADD_GOALS';
export const REMOVE_GOALS ='REMOVE_GOALS';




export function addGoal(goal) {
    return {
        type:ADD_GOALS,
        goal,
    }
}

export function removeGoal(id) {
    console.log('action------id',id)
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

export function handleRemoveGoal(name) {
    console.log('handleRemoveGoal',name.id)
    return (dispatch)=>{
        dispatch(removeGoal(name.id))
        return API.deleteGoal(name.id).catch(()=>{
            dispatch(addGoal(name))
            alert("错误请重试")
        })
    }
}