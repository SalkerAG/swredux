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
import { FilmAPI, FilmDetailsAPI, FilmsAPIfull, filmCharacter } from "../services/API";

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

export function filmsFullAction() {
  return async dispatch => {
    dispatch(startFilmsFull());
    FilmsAPIfull().then(response => {
      dispatch(FilmsFullSuccess(response.data));
    }).catch(() => {
      dispatch(FilmsFullError())
    })
  }
}

export const startFilmsFull = () => ({
  type: API_FILM_FULL
})

export const FilmsFullSuccess = (films) => ({
  type: API_FILM_FULL_SUCCESS,
  payload: films
})

export const FilmsFullError = () => ({
  type: API_FILM_FULL_ERROR,
})


export function filmCharactersAction(films) {
  return async dispatch => {
    dispatch(newFilmCharacter());
    // eslint-disable-next-line array-callback-return
    films.map((film, index) => {
      filmCharacter(film).then(response => {
        dispatch(newFilmCharacterSuccess(response.data));
      }).catch(() => {
        dispatch(newFilmCharacterError());
      })
    })
  };
}

export const newFilmCharacter = () => ({
  type: START_FILM_CHARACTER
})

export const newFilmCharacterSuccess = (film) => ({
  type: FILM_CHARACTER_SUCCESS,
  payload: film
})

export const newFilmCharacterError = () => ({
  type: FILM_CHARACTER_ERROR,
})