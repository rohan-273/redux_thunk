// Reducers, as the name suggests, take in two things: previous state and an action.
// Then they reduce it (read it return) to one entity: the new updated instance of state.
// So reducers are basically pure JS functions which take in the previous state and
// an action and return the newly updated state.

import { authActionTypes } from "../Constant/authConstant";

const initialState = {
  loading: false,
  loginStatus: false,
  logoutStatus: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case authActionTypes.LOGIN_REQUEST_SUCESS:
      return {
        ...state,
        loginStatus: action.payload,
        logoutStatus: false,
        loading: false,
      };

    case authActionTypes.LOGIN_REQUEST_FAIL:
      return {
        ...state,
        loginStatus: false,
        logoutStatus: true,
        loading: false,
      };

    case authActionTypes.LOGOUT_REQUEST:
      return { ...state, loading: true };

    case authActionTypes.LOGOUT_REQUEST_SUCESS:
      return {
        ...state,
        loginStatus: false,
        logoutStatus: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
