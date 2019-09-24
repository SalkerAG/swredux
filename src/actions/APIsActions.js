import { START_API_FILM, API_FILM_SUCCESS, API_FILM_ERROR, CLEAN_API_FILM } from "../types";
import { FilmAPI } from "../services/API"

// Buscar una pelicula en la API

export function searchNewFilmAction(title) {
  return async dispatch => {
    dispatch(newSearch());
    FilmAPI(title).then(response => {
      dispatch(newSearchSuccess(response.data.results[0]));
    }).catch(() => {
      dispatch(newSearchError());
    })
  };
}

export const newSearch = () => ({
  type: START_API_FILM,
});


export const newSearchSuccess = (respuesta) => ({
  type: API_FILM_SUCCESS,
  payload: respuesta
})

export const newSearchError = () => ({
  type: API_FILM_ERROR
})


export function cleanSearchAction() {
  return dispatch => {
    dispatch(cleanSearch());
  }
}

export const cleanSearch = () => ({
  type: CLEAN_API_FILM
});
