import { AUTH_LOGIN, AUTH_LOGOUT } from "../types"

const initialValue = {
  isAuthenticated: false,
  user: {},
}

const AuthReducer = (state = initialValue, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        isAuthenticated: true,
        user: action.payload,
      }
    case AUTH_LOGOUT:
      return initialValue
    default:
      return state
  }
}

export default AuthReducer
