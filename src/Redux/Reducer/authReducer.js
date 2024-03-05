// Reducers, as the name suggests, take in two things: previous state and an action.
// Then they reduce it (read it return) to one entity: the new updated instance of state.
// So reducers are basically pure JS functions which take in the previous state and
// an action and return the newly updated state.

import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCESS,
  LOGIN_REQUEST_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_SUCESS,
} from "../Constant/authConstant";

const initialState = {
  loading: false,
  loginStatus: false,
  logoutStatus: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_REQUEST_SUCESS:
      return {
        ...state,
        loginStatus: action.payload,
        logoutStatus: false,
        loading: false,
      };

    case LOGIN_REQUEST_FAIL:
      return {
        ...state,
        loginStatus: false,
        logoutStatus: true,
        loading: false,
      };

    case LOGOUT_REQUEST:
      return { ...state, loading: true };

    case LOGOUT_REQUEST_SUCESS:
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
