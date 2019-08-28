import React,{Component} from 'react'
import List from './List'


class Goals extends Component{
    render() {
        return (
            <div>
                <h3>Goals</h3>
                <input type="text"/>
                <button>提交</button>
                <List/>
            </div>
        );
    }
}

export default Goals
