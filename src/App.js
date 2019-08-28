import React,{Component} from 'react';
import Todos from './component/Todos'
import Goals from './component/Goals'

class App extends Component{
    render() {
        return (
            <div>
                <Todos/>
                <Goals/>
            </div>
        );
    }
}

export default App;
