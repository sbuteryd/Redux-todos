import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
    handleTodo,
    handleRemoveTodo,
    handletoggleTodo
} from '../action/todos'

import List from './List'

class Todos extends Component{
    addItem = (e)=>{
        e.preventDefault()
        const todoValue = this.input.value
        this.props.dispatch(handleTodo(todoValue,()=>this.input.value=''))
    }
    deleteItem=(todo)=>{
        this.props.dispatch(handleRemoveTodo(todo))
    }
    toggleItem=(id)=>{
        this.props.dispatch(handletoggleTodo(id))
    }
    render() {
        return (
            <div>
                <h3>Todos</h3>
                <input type="text" ref={(input)=>this.input=input}/>
                <button onClick={this.addItem}>提交</button>
                <List
                    items={this.props.todos}
                    addItem={this.addItem}
                    deleteItem={this.deleteItem}
                    toggleItem={this.toggleItem}
                />
            </div>
        );
    }
}

function mapStateToProps({todos}) {
    return {
        todos
    }
}

export default connect (mapStateToProps)(Todos)