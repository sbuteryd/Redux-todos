import React,{Component} from 'react';
import ConnectTodos from '../component/Todos'
import ConnectGoals from '../component/Goals'
import {handleReceiveData} from '../action/share'
import  {connect} from 'react-redux'

class App extends Component{
    componentDidMount() {
        this.props.dispatch(handleReceiveData())
    }
    render() {
        return (
            <div>
                <ConnectTodos/>
                <ConnectGoals/>
            </div>
        );
    }
}

export default connect()(App)
