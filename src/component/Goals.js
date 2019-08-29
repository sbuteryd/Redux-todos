import React,{Component} from 'react'
import {connect} from 'react-redux'

import {
    handleAddGoal,
    handleDeleteGoal
} from "../action/goals";

import List from '../component/List'

class Goals extends Component{
    additem =(e)=>{
        e.preventDefault()
        const item = this.input.value
        this.props.dispatch(handleAddGoal(item,()=>this.input.value =''))
    }
    deleteItem =(goal)=>{
        this.props.dispatch(handleDeleteGoal(goal))
    }
    render() {
        return (
            <div>
                <h3>Goals</h3>
                <input
                    type="text"
                    ref={(input)=>this.input=input}
                />
                <button onClick={this.additem}>提交</button>
                <List
                    items={this.props.goals}
                    deleteItem={this.deleteItem}
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