import {applyMiddleware} from 'redux'
import logger from './logger'
import check from './check'
import thunk from 'redux-thunk'


export default applyMiddleware(
    thunk,
    logger,
    check
)