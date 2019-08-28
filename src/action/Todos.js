const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO ='REMOVE_TODO';
const TOGGLE_TODO='TOGGLE_TODO'


function addTodo(todo) {
    return {
        type:ADD_TODO,
        todo
    }
}

export function removeTodo(id) {
    return {
        type:REMOVE_TODO,
        id
    }
}

export function toggleTodo(id) {
    return {
        type:TOGGLE_TODO,
        id
    }
}

