import  API from 'goals-todos-api'

//action
export const ADD_TODO ='ADD_TODO'
export const REMOVE_TODO ='REMOVE_TODO'
export const TOGGLE_TODO ='TOGGLE_TODO'


//action  function
function addTodo(todo) {
    return {
        type:ADD_TODO,
        todo
    }
}

function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

function toggleTodo(id) {
    return {
        type:TOGGLE_TODO,
        id
    }
}

//thunk

export function handleTodo(todo,cb) {
    return (dispatch)=>{
       return API.saveTodo(todo).then((todo)=>{
            dispatch(addTodo(todo))
           cb()
        }).catch(()=>{
           alert("错误添加请重试")
       })
    }
}

export function handleRemoveTodo(todo) {
    return (dispatch)=>{
        dispatch(removeTodo(todo.id))
        return API.deleteTodo(todo.id).catch(()=>{
            dispatch(addTodo(todo))
            alert("错误添加请重试")
        })
    }
}

export function handletoggleTodo(id) {
    return (dispatch)=>{
        dispatch(toggleTodo(id))
        return API.saveTodoToggle(id).catch((id)=>{
            dispatch(toggleTodo(id))
            alert('错误添加请重试')
        })
    }
}