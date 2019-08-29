import  API from 'goals-todos-api'
export const ADD_TODO ='ADD_TODO'
export const REMOVE_TODO='REMOVE_TODO'
export const TOGGLE_TODO ='TOGGLE_TODO'


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

export function handleAddTodo(todo,cb) {
    return (dispatch)=>{
        return API.saveTodo(todo).then((todo)=>{
            dispatch(addTodo(todo))
            cb()
        }).catch(()=>{
            alert("错误添加请重试")
        })
    }
}

export function handleDeleteTodo(todo) {
    return (dispatch)=>{
        dispatch(removeTodo(todo.id))
        return API.deleteTodo(todo.id).catch(()=>{
            dispatch(addTodo(todo))
            alert("添加错误请重试")
        })
    }
}

export function handleToggleTodo(id) {
    return (dispatch)=>{
        dispatch(toggleTodo(id))
        return API.saveTodoToggle(id).catch(()=>{
            dispatch(toggleTodo(id))
        })
    }
}