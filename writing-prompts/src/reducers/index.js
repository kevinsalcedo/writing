import { combineReducers } from "redux";
import promptReducer from "./promptReducer";

export default combineReducers({
  prompts: promptReducer
});
