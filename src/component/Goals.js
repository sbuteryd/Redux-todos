import React,{Component} from 'react'
import List from './List'
import {connect} from 'react-redux'

class Goals extends Component{
    render() {
        return (
            <div>
                <h3>Goals</h3>
                <input type="text"/>
                <button>提交</button>
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
