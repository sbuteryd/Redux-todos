import React,{Component} from 'react'
import List from './List'

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

export default Todos