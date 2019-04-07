import api from "../api/api";

import { CREATE_PROMPT, FETCH_PROMPT, FETCH_PROMPTS } from "./types";

export const createPrompt = formValues => async dispatch => {
  const response = await api.post("/prompts", { ...formValues });

  dispatch({
    type: CREATE_PROMPT,
    payload: response.data
  });
};

export const fetchPrompts = () => async dispatch => {
  const response = await api.get("/prompts");
  dispatch({
    type: FETCH_PROMPTS,
    payload: response.data
  });
};

export const fetchPrompt = id => async dispatch => {
  const response = await api.get(`/prompts/${id}`);

  dispatch({
    type: FETCH_PROMPT,
    payload: response.data
  });
};
