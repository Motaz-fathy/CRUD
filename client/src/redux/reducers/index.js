import {combineReducers} from 'redux'
import {GetAllProduct ,ProductDetails} from './productReducer'
import { RegisterReducer ,LoginReducer ,userDetailsReducer } from './UserReducer'

export const Reducers = combineReducers({
    GetAllProduct ,
    LoginReducer ,
    RegisterReducer ,
    userDetailsReducer,
    ProductDetails
})