import React,{Component} from 'react'
import List from './List'
import {connect} from 'react-redux'
import {handleAddGoal} from '../action/goals'

class Goals extends Component{
    getGoalValue=(e)=>{
        e.preventDefault()
        console.log(this.input.value)
        const name = this.input.value
        this.props.dispatch(handleAddGoal(name,()=>this.input.value=''))
    }

    render() {
        return (
            <div>
                <h3>Goals</h3>
                <input type="text" ref={(input)=>this.input=input}/>
                <button onClick={this.getGoalValue}>提交</button>
                <List/>
            </div>
        );
    }
}

function mapStateToProps({goals}) {
    return {

    }
}

export default connect(mapStateToProps)(Goals)
