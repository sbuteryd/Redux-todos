import React,{Component} from 'react';
import ConnectTodos from '../component/Todos'
import ConnectGoals from '../component/Goals'

export default class App extends Component{
    render() {
        return (
            <div>
                <ConnectTodos/>
                <ConnectGoals/>
            </div>
        );
    }
}