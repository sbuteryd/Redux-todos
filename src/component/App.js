import React,{Component} from 'react';
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
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
        if(this.props.loading===true){
            return <h3>loading</h3>
        }
        return (
            <div>
                <ConnectedTodos/>
                <ConnectedGoals/>
            </div>
        );
    }
}

function mapDispatchToProps({loading}) {
    return {
        loading
    }
}

export default connect(mapDispatchToProps)(App);
