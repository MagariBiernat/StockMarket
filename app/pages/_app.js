import React, { useEffect } from "react"
import ThemeProvider from "../context/ThemeContext"
import jwtDecode from "jwt-decode"
import { Provider, useSelector, useDispatch } from "react-redux"
import { useStore } from "../redux/store"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import { AUTH_LOGOUT } from "../redux/types"

export default function _app({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })
  return (
    <Provider store={store}>
      <ThemeProvider>
        <PersistGate loading={<div>loading</div>} persistor={persistor}>
          <AuthComponent Component={Component} pageProps={pageProps} />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  )
}

export const AuthComponent = ({ Component, pageProps }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("storedToken") || null
    if (token) {
      const decoded = jwtDecode(token)
      if (Date.now() > decoded?.exp * 1000) {
        localStorage.removeItem("storedToken")

        dispatch({ type: AUTH_LOGOUT })
      } else {
        console.log("token is alright")
      }
    }
  }, [])

  console.log(isAuthenticated, user)

  return <Component {...pageProps} />
}
