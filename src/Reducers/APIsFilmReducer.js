import {
  START_API_FILM,
  API_FILM_SUCCESS,
  API_FILM_ERROR,
  CLEAN_API_FILM,
  START_FILM_DETAILS,
  DETAILS_FILM_SUCCESS,
  DETAILS_FILM_ERROR,
  API_FILM_FULL,
  API_FILM_FULL_SUCCESS,
  API_FILM_FULL_ERROR,
  START_FILM_CHARACTER,
  FILM_CHARACTER_SUCCESS,
  FILM_CHARACTER_ERROR
} from "../types";

// State inicial

const initialState = {
  film: {},
  films: [],
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
      };
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
    case START_FILM_DETAILS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case DETAILS_FILM_SUCCESS:
      return {
        ...state,
        film: action.payload,
        loading: false,
        error: null
      };
    case DETAILS_FILM_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case API_FILM_FULL:
      return {
        ...state,
        loading: true,
        error: null
      }
    case API_FILM_FULL_SUCCESS:
      return {
        ...state,
      films: action.payload,
      loading: false,
      error: false
      }
    case API_FILM_FULL_ERROR:
      return {
        ...state,
        films: [],
        loading: false,
        error: false
      }
      case START_FILM_CHARACTER:
        return {
          ...state,
          films: [],
          loading: true,
          error: false
        }
      case FILM_CHARACTER_SUCCESS:
        return {
          ...state,
          films: [...state.films, action.payload],
          loading: false,
          error: false
        }
      case FILM_CHARACTER_ERROR:
        return {
          ...state,
          films: [],
          loading: false,
          error: true
        }
    default:
      return state;
  }
}
