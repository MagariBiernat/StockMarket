import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

export const localStorageReduxKey = "reduxState"

const middlewares = [thunk]

const rootReducer = {}

const composedEnhancers = applyMiddleware(...middlewares)

const store = createStore(rootReducer, {}, composedEnhancers)

export default store
