import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import promptReducer from "./promptReducer";

export default combineReducers({
  prompts: promptReducer,
  form: formReducer
});
