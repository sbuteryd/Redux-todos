import React,{Component} from 'react';
import ConnectTodos from '../component/Todos'
import ConnectGoals from '../component/Goals'
import {connect} from 'react-redux'
import {handleReceive} from '../action/share'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceive())
    }

    render() {
        if(this.props.loading ===true){
            return <h3>Loading</h3>
        }
        return (
            <div>
                <ConnectTodos/>
                <ConnectGoals/>
            </div>
        );
    }
}

function mapStateToProps({loading}) {
    return {
        loading
    }
}

export default connect(mapStateToProps) (App);
