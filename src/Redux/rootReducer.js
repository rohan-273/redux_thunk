import { combineReducers } from "redux";
import authReducer from "./Reducer/authReducer"

const appReducer = combineReducers({
  login: authReducer,
});



const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
