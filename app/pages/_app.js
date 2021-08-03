import React, { useEffect } from "react"
import ThemeProvider from "../context/ThemeContext"
import jwtDecode from "jwt-decode"
import { Provider, useSelector, useDispatch } from "react-redux"
import store from "../redux/store"
import { AUTH_LOGOUT } from "../redux/types"

export default function _app({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthComponent Component={Component} pageProps={pageProps} />
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
        dispatch({ type: AUTH_LOGOUT })
      }
    }
  })

  console.log(isAuthenticated, user)

  return <Component {...pageProps} />
}
