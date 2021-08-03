export const LogIn = "LOGIN";
export const LogOut = "LOGOUT";

export const LogIn = () => ({
  type: LOGIN,
  payload: {},
});

export const LogOut = () => ({
  type: LOGOUT,
});
