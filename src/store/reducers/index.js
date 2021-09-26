import {combineReducers} from "redux"
import user from "./user"
import allUsers from "./allUsers"

const rootReducer = combineReducers({user,allUsers})

export default rootReducer