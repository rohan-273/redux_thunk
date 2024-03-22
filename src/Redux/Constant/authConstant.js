// In Redux, we have a lot of actions and reducers defined while making
// an application and managing its state from the redux.
// Then, constants come into the picture, it provides a way to define the type of
// actions and reducers in one file or one place.

export const authActionTypes = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_REQUEST_SUCESS: "LOGIN_REQUEST_SUCESS",
  LOGIN_REQUEST_FAIL: "LOGIN_REQUEST_FAIL",
  LOGOUT_REQUEST: "LOGOUT_REQUEST",
  LOGOUT_REQUEST_SUCESS: "LOGOUT_REQUEST_SUCESS",
};
