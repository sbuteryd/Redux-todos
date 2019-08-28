import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from './logger'
import check from '../middleware/check'


export default applyMiddleware(thunk,check,logger)