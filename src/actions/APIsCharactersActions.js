import {
  START_API_CHARACTER,
  API_CHARACTER_SUCCESS,
  API_CHARACTER_ERROR
} from "../types";
import { carouselCharacterAPI } from "../services/API";

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
