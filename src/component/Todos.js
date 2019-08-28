import React,{Component} from 'react'
import List from './List'
import {connect} from 'react-redux'
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggle
} from  '../action/todos'

class Todos extends Component{
    addItem =(e)=>{
        e.preventDefault()
        const todo = this.input.value
        this.props.dispatch(handleAddTodo(todo,()=>this.input.value =''))
    }
    removeItem =(name)=>{
        this.props.dispatch(handleDeleteTodo(name))
    }
    toggleItem =(id)=>{
        this.props.dispatch(handleToggle(id))
    }
    render() {
        const {todos}=this.props
        return (
            <div>
                <h3>Todos</h3>
                <input type="text" ref={(input)=>this.input=input}/>
                <button onClick={this.addItem}>提交</button>
                <List
                    toggle={this.toggleItem}
                    items={this.props.todos}
                    remove={this.removeItem}
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

export default connect(mapStateToProps)(Todos)