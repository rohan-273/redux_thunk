import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCESS,
    LOGIN_REQUEST_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_REQUEST_SUCESS,
  } from "../Constant/authConstant";
  
  export function loginRequestAction(state, action) {
    return {
      type: LOGIN_REQUEST,
    };
  }
  
  export function loginRequestSucess(action) {
    console.log(action);
    return {
      type: LOGIN_REQUEST_SUCESS,
      payload: action,
    };
  }
  export function loginRequestFail(state, action) {
    return {
      type: LOGIN_REQUEST_FAIL,
      payload: action?.payload,
    };
  }
  
  export function logoutRequestAction(state, action) {
    return {
      type: LOGOUT_REQUEST,
    };
  }
  
  export function logoutRequestSucess(state, action) {
    return {
      type: LOGOUT_REQUEST_SUCESS,
      payload: action?.payload,
    };
  }
  