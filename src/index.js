import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducers from '../src/reducers'
import middleware from './middleware'


const store =createStore(reducers,middleware)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
