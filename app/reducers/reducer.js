import { LOGIN, LOGOUT } from "../actions/action";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {};
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
