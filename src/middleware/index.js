import {applyMiddleware} from "redux";
import logger from './logger'
import thunk from 'react-redux'
import check from './check'

export default applyMiddleware(
    thunk,check,logger
)