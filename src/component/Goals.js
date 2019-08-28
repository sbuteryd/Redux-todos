import React,{Component} from 'react'
import List from './List'
import {connect} from 'react-redux'
import {handleAddGoal,handleRemoveGoal} from '../action/goals'

class Goals extends Component{
    getGoalValue=(e)=>{
        e.preventDefault()
        const name = this.input.value
        this.props.dispatch(handleAddGoal(name,()=>this.input.value=''))
    }
    deleteList =(goal)=>{
        this.props.dispatch(handleRemoveGoal(goal))
    }
    render() {
        return (
            <div>
                <h3>Goals</h3>
                <input type="text" ref={(input)=>this.input=input}/>
                <button onClick={this.getGoalValue}>提交</button>
                <List
                    items={this.props.goals}
                    deleteList={this.deleteList}
                />
            </div>
        );
    }
}

function mapStateToProps({goals}) {
    return {
        goals
    }
}

export default connect(mapStateToProps)(Goals)
