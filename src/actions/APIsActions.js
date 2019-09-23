import { START_API_FILM, API_FILM_SUCCESS, API_FILM_ERROR } from "../types";
import Axios from "axios";
import FilmAPI from "../services/FilmAPI";

// Buscar una pelicula en la API

export function searchNewFilmAction(title) {
  return dispatch => {
    console.log(title);
    dispatch(newSearch(title));
    var newTitle = title.split(/[ ]+/).join("+");
    Axios.get(`https://www.swapi.co/api/films/?search=${newTitle}`)
      .then(respuesta => {
        console.log(respuesta);
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export const newSearch = title => ({
  type: START_API_FILM,
  payload: title
});

export const newSearchSuccess = 
