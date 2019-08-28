import API from 'goals-todos-api'
export const ADD_GOAL ='ADD_GOAL';
export const REMOVE_GOAL ='REMOVE_GOALS';




export function addGoal(goal) {
    return {
        type:ADD_GOAL,
        goal,
    }
}

export function removeGoal(id) {
    console.log('action------id',id)
    return {
        type: REMOVE_GOAL,
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

export function handleDeleteGoal(name) {
    console.log('handleRemoveGoal',name.id)
    return (dispatch)=>{
        dispatch(removeGoal(name.id))
        return API.deleteGoal(name.id).catch(()=>{
            dispatch(addGoal(name))
            alert("错误请重试")
        })
    }
}