import { START_API_FILM, API_FILM_SUCCESS, API_FILM_ERROR, CLEAN_API_FILM } from "../types";

// State inicial

const initialState = {
  film: {},
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLEAN_API_FILM:
      return {
        film: {},
        loading: false,
        error: null
      }
    case START_API_FILM:
      return {
        ...state,
        film: {},
        loading: true,
        error: null
      };
    case API_FILM_SUCCESS:
      return {
        ...state,
        film: action.payload,
        loading: false,
        error: null
      };
    case API_FILM_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
