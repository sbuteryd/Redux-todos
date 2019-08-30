import React,{Component} from 'react'
import {connect} from 'react-redux'
import List from './List'
import {
    handleAddGoal,
    handleRemoveGoal
} from "../action/goals";

class Goals extends Component {
    addItem = (e)=>{
        e.preventDefault()
        const goalValue = this.input.value
        this.props.dispatch(handleAddGoal(goalValue,()=>this.input.value=''))
    }
    deleteItem=(goal)=>{
        this.props.dispatch(handleRemoveGoal(goal))
    }
    render() {
        return (
            <div>
                <h3>Goals</h3>
                <input
                    type="text"
                    ref={(input)=>this.input=input}
                />
                <button onClick={this.addItem}>提交</button>
                <List
                    deleteItem={this.deleteItem}
                    items={this.props.goals}
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