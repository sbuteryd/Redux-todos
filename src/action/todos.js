import API from 'goals-todos-api'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO ='REMOVE_TODO';
export const TOGGLE_TODO='TOGGLE_TODO'

function addTodo(todo) {
    return {
        type:ADD_TODO,
        todo
    }
}

function removeTodo(id) {
    return {
        type:REMOVE_TODO,
        id
    }
}

function toggleTodo(id) {
    return {
        type:TOGGLE_TODO,
        id
    }
}

export function handleAddTodo(name,cb) {
    return (dispatch)=>{
        return API.saveTodo(name)
            .then((name)=>{
                dispatch(addTodo(name))
            cb()
        }).catch(()=>{
                alert('错误请重试')
        })
    }
}

export function handleDeleteTodo(name) {
    return (dispatch)=>{
        dispatch(removeTodo(name.id))
        return API.deleteGoal(name.id).catch(()=>{
            dispatch(addTodo(name))
            alert('错误添加请重试')
        })
    }
}

export function handleToggle(id) {
    return (dispatch)=>{
        dispatch(toggleTodo(id))
       return  API.saveTodoToggle(id).catch(()=>{
           dispatch(toggleTodo(id))
           alert("An error occurred. Try agian")
       })
    }
}