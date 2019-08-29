import React,{Component} from 'react'
import List from '../component/List'
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo
} from '../action/todos'

import {connect}from 'react-redux'

class Todos extends Component {
    addItem= (e)=>{
        e.preventDefault()
        const {dispatch} =this.props
        const item = this.input.value ? this.input.value:alert("空白无法添加")
        dispatch(handleAddTodo(item,()=>this.input.value =''))
    }
    deleteItem =(todo)=>{
        const {dispatch} =this.props
        dispatch(handleDeleteTodo(todo))
    }
    toggleItem =(id)=>{
        const {dispatch} =this.props
        dispatch(handleToggleTodo(id))
    }
    render() {
        console.log('todos---',this.props.todos,'--')
        return (
            <div>
                <h3>Add todo</h3>
                <input
                    type="text"
                    placeholder={"ADD TODO"}
                    ref={(input)=>this.input =input}
                />
                <button onClick={this.addItem}>提交</button>
                <List
                    items={this.props.todos}
                    deleteItem={this.deleteItem}
                    toggleItem={this.toggleItem}
                />
            </div>
        )
    }
}

function mapDispatchToProps({todos}) {
    return {
        todos
    }
}

export default connect(mapDispatchToProps)(Todos)
