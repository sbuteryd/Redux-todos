import React,{Component} from 'react'
import List from './List'
import {connect} from 'react-redux'
import {handleTodo} from  '../action/todos'

class Todos extends Component{
    getInputValue =(e)=>{
        e.preventDefault()
        const todo = this.input.value
        this.props.dispatch(handleTodo(todo,()=>this.input.value =''))
    }
    render() {
        return (
            <div>
                <h3>Todos</h3>
                <input type="text" ref={(input)=>this.input=input}/>
                <button onClick={this.getInputValue}>提交</button>
                <List/>
            </div>
        );
    }
}

function mapStateToProps() {
    return {

    }
}

export default connect(mapStateToProps)(Todos)