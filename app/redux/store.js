import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import AuthReducer from "./reducers/authReducer"

export const localStorageReduxKey = "reduxState"

const middlewares = [thunk]

const rootReducer = combineReducers({
  auth: AuthReducer,
})

const composedEnhancers = applyMiddleware(...middlewares)

const store = createStore(rootReducer, {}, composedEnhancers)

export default store
