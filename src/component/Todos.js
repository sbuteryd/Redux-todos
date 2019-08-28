import React,{Component} from 'react'
import List from './List'
import {connect} from 'react-redux'

class Todos extends Component{
    render() {
        return (
            <div>
                <h3>Todos</h3>
                <input type="text"/>
                <button>提交</button>
                <List/>
            </div>
        );
    }
}

function mapStateToProps(todos) {
    return {
        todos
    }
}

export default connect(mapStateToProps)(Todos)