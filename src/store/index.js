import {createStore, applyMiddleware,compose} from "redux"
import rootReducer from "./reducers"
import thunk from "redux-thunk"

const middlware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(...middlware)))

export default store