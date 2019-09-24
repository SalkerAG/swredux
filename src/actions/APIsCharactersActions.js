import {
  START_API_CHARACTER,
  API_CHARACTER_SUCCESS,
  API_CHARACTER_ERROR,
  START_NAME_CHARACTER,
  NAME_CHARACTER_SUCCESS,
  NAME_CHARACTER_ERROR
} from "../types";
import { carouselCharacterAPI, nameCharacterAPI } from "../services/API";

// Carouse de Characters
export function carouselCharactersAction() {
  return async dispatch => {
    dispatch(newCarousel());
    carouselCharacterAPI()
      .then(response => {
        dispatch(newCarouselSuccess(response.data.results));
      })
      .catch(() => {
        dispatch(newCarouselError());
      });
  };
}

export const newCarousel = () => ({
  type: START_API_CHARACTER
});

export const newCarouselSuccess = characters => ({
  type: API_CHARACTER_SUCCESS,
  payload: characters
});

export const newCarouselError = () => ({
  type: API_CHARACTER_ERROR
});

// Nombre de los characters

export function nameCharactersAction(charactersURL) {
  return async dispatch => {
    dispatch(newNameCharacter());
    nameCharacterAPI(charactersURL)
      .then(response => {
        console.log("DATA", response.data);
        // dispatch(newNameCharacterSuccess(response.data.results))
      })
      .catch(() => {
        dispatch(newNameCharacterError());
      });
  };
}

export const newNameCharacter = () => ({
  type: START_NAME_CHARACTER
});

export const newNameCharacterSuccess = character => ({
  type: NAME_CHARACTER_SUCCESS,
  payload: character
});

export const newNameCharacterError = () => ({
  type: NAME_CHARACTER_ERROR
});
