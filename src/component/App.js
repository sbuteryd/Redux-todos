import React,{Component} from 'react';
import Todos from './Todos'
import Goals from './Goals'
import API from 'goals-todos-api'
import {connect} from 'react-redux'
import {receiveData} from '../action/share'

class App extends Component{
    componentDidMount() {
        Promise.all([API.fetchTodos(),API.fetchGoals()]).then(([todos,goals])=>{
            this.props.dispatch(receiveData(todos,goals))
        })
    }

    render() {
        return (
            <div>
                <Todos/>
                <Goals/>
            </div>
        );
    }
}

function mapDispatchToProps() {
    return {

    }
}

export default connect(mapDispatchToProps)(App);
