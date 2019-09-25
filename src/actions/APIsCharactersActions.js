import {
  START_API_CHARACTER,
  API_CHARACTER_SUCCESS,
  API_CHARACTER_ERROR,
  START_NAME_CHARACTER,
  NAME_CHARACTER_SUCCESS,
  NAME_CHARACTER_ERROR,
  START_DETAILS_CHARACTER,
  DETAILS_CHARACTER_SUCCESS,
  DETAILS_CHARACTER_ERROR
} from "../types";
import { carouselCharacterAPI, nameCharacterAPI, detailsCharacterAPI } from "../services/API";

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
    // eslint-disable-next-line array-callback-return
    charactersURL.map((characterURL, index) => {
      nameCharacterAPI(characterURL).then(response => {
        dispatch(newNameCharacterSuccess(response.data));
      }).catch(() => {
        dispatch(newNameCharacterError());
      })
    })
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

// INFORMACIÓN DE LOS CHARACTERS

export function DetailsCharactersAction(id) {
  return async dispatch => {
    dispatch(newDetailsCharacter());
    detailsCharacterAPI(id).then(response => {
      dispatch(newDetailsCharacterSuccess(response.data))
    }).catch(() => {
      dispatch(newDetailsCharacterError())
    })
  }
}

export const newDetailsCharacter = () => ({
  type: START_DETAILS_CHARACTER
})

export const newDetailsCharacterSuccess = (character) => ({
  type: DETAILS_CHARACTER_SUCCESS,
  payload: character
})

export const newDetailsCharacterError = () => ({
  type: DETAILS_CHARACTER_ERROR
})
