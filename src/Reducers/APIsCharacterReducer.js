import {
  START_API_CHARACTER,
  API_CHARACTER_SUCCESS,
  API_CHARACTER_ERROR,
  START_NAME_CHARACTER,
  NAME_CHARACTER_SUCCESS,
  NAME_CHARACTER_ERROR
} from "../types";

const initialState = {
  characters: [],
  character: {},
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_API_CHARACTER:
      return {
        ...state,
        loading: true,
        error: false
      };
    case API_CHARACTER_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
        error: false
      };
    case API_CHARACTER_ERROR:
      return {
        ...state,
        characters: [],
        loading: false,
        error: true
      };
    case START_NAME_CHARACTER:
      return {
        ...state,
        characters: [],
        character: {},
        loading: true,
        error: null
      };
    case NAME_CHARACTER_SUCCESS:
      return {
        ...state,
        character: action.payload,
        loading: false,
        error: null
      };
    case NAME_CHARACTER_ERROR:
      return {
        ...state,
        character: {},
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
