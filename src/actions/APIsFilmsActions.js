import {
  START_API_FILM,
  API_FILM_SUCCESS,
  API_FILM_ERROR,
  CLEAN_API_FILM,
  START_FILM_DETAILS,
  DETAILS_FILM_SUCCESS,
  DETAILS_FILM_ERROR
} from "../types";
import { FilmAPI, FilmDetailsAPI } from "../services/API";

// Buscar una pelicula en la API
export function searchNewFilmAction(title) {
  return async dispatch => {
    dispatch(newSearch());
    FilmAPI(title)
      .then(response => {
        dispatch(newSearchSuccess(response.data.results[0]));
      })
      .catch(() => {
        dispatch(newSearchError());
      });
  };
}

export const newSearch = () => ({
  type: START_API_FILM
});

export const newSearchSuccess = respuesta => ({
  type: API_FILM_SUCCESS,
  payload: respuesta
});

export const newSearchError = () => ({
  type: API_FILM_ERROR
});

// Limpiar el state de la búsqueda
export function cleanSearchAction() {
  return dispatch => {
    dispatch(cleanSearch());
  };
}

export const cleanSearch = () => ({
  type: CLEAN_API_FILM
});

// Busqueda de los detalles de una película

export function startDetailsFilmAction(id) {
  return async dispatch => {
    dispatch(startDetailsFilm());
    FilmDetailsAPI(id)
      .then(response => {
        dispatch(startDetailsFilmSucess(response.data));
      })
      .catch(() => {
        dispatch(newSearchError());
      });
  };
}

export const startDetailsFilm = () => ({
  type: START_FILM_DETAILS
});

export const startDetailsFilmSucess = film => ({
  type: DETAILS_FILM_SUCCESS,
  payload: film
});

export const startDetailsFilmError = () => ({
  type: DETAILS_FILM_ERROR
});
