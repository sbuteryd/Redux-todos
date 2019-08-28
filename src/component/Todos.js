import React,{Component} from 'react'
import List from './List'
import {connect} from 'react-redux'
import {handleTodo,handleRemoveTodo,toggleTodo} from  '../action/todos'

class Todos extends Component{
    getInputValue =(e)=>{
        e.preventDefault()
        const todo = this.input.value
        this.props.dispatch(handleTodo(todo,()=>this.input.value =''))
    }
    deleteList =(name)=>{
        this.props.dispatch(handleRemoveTodo(name))
    }
    toggleTodoList =(id)=>{
        this.props.dispatch(toggleTodo(id))
    }
    render() {
        const {todos}=this.props
        return (
            <div>
                <h3>Todos</h3>
                <input type="text" ref={(input)=>this.input=input}/>
                <button onClick={this.getInputValue}>提交</button>
                <List
                    items={todos}
                    deleteList={this.deleteList}
                    toggleTodoList={this.toggleTodoList}
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