import React from "react";
import Axios from "axios";

const FilmAPI = async title => {
  if (Object.keys(title).length === 0) return null;
  //Replazamos los espacions blancos por simbolos + para realizar la búsqueda mejor
  var newTitle = title.value.split(/[ ]+/).join("+");

  // Consultar a la API
  const url = `https://www.swapi.co/api/films/?search=${newTitle}`;
  const resultado = await Axios(url);

  return resultado.data;
};

export default FilmAPI;
