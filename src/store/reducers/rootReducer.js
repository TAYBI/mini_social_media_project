import { combineReducers } from "redux";
import ProjectReducer from "./projectReducer";
import AuthReducer from "./authReduser";

const rootReducer = combineReducers({
  auth: AuthReducer,
  project: ProjectReducer
});

export default rootReducer;
