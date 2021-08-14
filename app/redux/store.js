import { useMemo } from "react"
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import AuthReducer from "./reducers/authReducer"

const roootPersistConfig = {
  key: "root",
  storage,
}

const authPersistConfig = {
  key: "auth",
  storage,
}

export const localStorageReduxKey = "reduxState"

const middlewares = [thunk]

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, AuthReducer),
})

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares))

// const storeInitial = (initialState) => {
//   let store

//   const isClient = typeof window !== "undefined"

//   if (isClient) {
//     store = createStore(
//       persistReducer(roootPersistConfig, rootReducer),
//       initialState,
//       composedEnhancers
//     )

//     store.__PERSISTOR = persistStore(store)
//   } else {
//     store = createStore(rootReducer, initialState, composedEnhancers)
//   }

//   return store
// }

// export default storeInitial

export default function Store() {
  let store = createStore(rootReducer, {}, composedEnhancers)
  let persistor = persistStore(store)
  return [store, persistor]
}

function makeStore() {
  return createStore(rootReducer, {}, composedEnhancers)
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState)

  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    })

    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

const store = createStore(rootReducer, {}, composedEnhancers)

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState, [initialState]))

  return store
}
