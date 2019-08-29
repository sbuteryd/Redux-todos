import React,{Component} from 'react'
import List from './List'
import {connect} from 'react-redux'
import {
    handleAddGoal,
    handleDeleteGoal
} from '../action/goals'

class Goals extends Component{
    addItem=(e)=>{
        e.preventDefault()
        const name = this.input.value ? this.input.value: alert("请输入字符串")

        this.props.dispatch(handleAddGoal(name,()=>this.input.value=''))
    }
    removeItem =(goal)=>{
        this.props.dispatch(handleDeleteGoal(goal))
    }
    render() {
        return (
            <div>
                <h3>Goals</h3>
                <input type="text" ref={(input)=>this.input=input}/>
                <button onClick={this.addItem}>提交</button>
                <List

                    items={this.props.goals}
                    remove={this.removeItem}
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
