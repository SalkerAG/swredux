import { START_API_FILM, API_FILM_SUCCESS, API_FILM_ERROR } from "../types";

// State inicial

const initialState = {
  film: {},
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_API_FILM:
      return {
        ...state,
        film: action.payload,
        error: null
      };
    case API_FILM_SUCCESS:
      return {
        ...state,
        error: null,
        film: {}
      };
    case API_FILM_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}
