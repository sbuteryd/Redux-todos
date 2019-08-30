import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import {createStore} from 'redux'
import reudcers from './reudcers'
import middleware from './middleware'
import {Provider} from 'react-redux'

const store =createStore(reudcers,middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


