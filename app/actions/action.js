export const ADD = "LOGIN";
export const DELETE = "LOGOUT";

export const LogIn = () => ({
  type: LOGIN,
  payload: {},
});

export const LogOut = () => ({
  type: LOGOUT,
});
