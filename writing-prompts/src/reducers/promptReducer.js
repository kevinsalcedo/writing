import _ from "lodash";
import { FETCH_PROMPT, FETCH_PROMPTS, CREATE_PROMPT } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROMPTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROMPT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROMPT:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
