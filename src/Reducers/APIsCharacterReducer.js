import {
  START_API_CHARACTER,
  API_CHARACTER_SUCCESS,
  API_CHARACTER_ERROR
} from "../types";

const initialState = {
  characters: [],
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
    default:
      return state;
  }
}
