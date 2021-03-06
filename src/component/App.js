import React,{Component} from 'react';
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import {connect} from 'react-redux'
import {handleReceiveData} from '../action/share'
class App extends Component{
    componentDidMount() {
        const {dispatch} =this.props
        dispatch(handleReceiveData())
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
