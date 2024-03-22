// Actions are plain JavaScript object that contains information.
// Action is one of the building blocks of Redux.
// Redux is a state managing library used in JavaScript apps.
// It is used to manage the data and the state of the application.

import { authActionTypes } from "../Constant/authConstant";

export function loginRequestAction(state, action) {
  return {
    type: authActionTypes.LOGIN_REQUEST,
  };
}
export function loginRequestSucess(action) {
  // Payload stores the additional information about what happened.
  // It is not a compulsion to include “payload” in the object.
  // It is entirely up to you but we should always try to pass only the necessary information to the action object
  // and try to keep it as light as possible
  return {
    type: authActionTypes.LOGIN_REQUEST_SUCESS,
    payload: action,
  };
}
export function loginRequestFail(state, action) {
  return {
    type: authActionTypes.LOGIN_REQUEST_FAIL,
    payload: action?.payload,
  };
}

export function logoutRequestAction(state, action) {
  return {
    type: authActionTypes.LOGOUT_REQUEST,
  };
}

export function logoutRequestSucess(state, action) {
  return {
    type: authActionTypes.LOGOUT_REQUEST_SUCESS,
    payload: action?.payload,
  };
}
