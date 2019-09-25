import api from "./config";
import apiPhoto  from "./configPhoto"

export async function FilmAPI(title) {
  if (Object.keys(title).length === 0) return null;
  var newTitle = title.split(/[ ]+/).join("+");

  try {
    const url = `films/?search=${newTitle}`;
    const r = await api.get(url);
    return r;
  } catch (error) {
    return error;
  }
}

export async function carouselCharacterAPI() {
  try {
    const url = "people/";
    const r = await api.get(url);
    return r;
  } catch (error) {
    return error;
  }
}

export async function FilmDetailsAPI(id) {
  try {
    const url = `films/${id}`;
    const r = await api.get(url);
    return r;
  } catch (error) {
    return error;
  }
}

export async function nameCharacterAPI(characterURL) {

  var idAPI = characterURL.substr(32, 2);
  try {
     const url = `people/${idAPI}`;
     const r = await api.get(url);
     return r;
   } catch (error) {
     return error;
   }
}

export async function FilmsAPIfull() {

  try {
     const url = `films/`;
     const r = await api.get(url);
     return r;
   } catch (error) {
     return error;
   }
}

export async function detailsCharacterAPI(id) {
  try {
    const url = `people/${id}`;
    const r = await api.get(url);
    return r;
  } catch (error) {
    return error;
  }
}

export async function filmCharacter(film) {
  var idAPI = film.substr(31,1);
  try {
    const url = `films/${idAPI}`;
    const r = await api.get(url);
    return r;
  } catch (error) {
    return error;
  }
}

export async function photosCharacter(name) {
  if (Object.keys(name).length === 0) return null;
  var newName = name.split(/[ ]+/).join("+");

  try {
    const url = `?key=13707655-063ce9aae3e69fb14064ef33f&q=${newName}&image_type=photo`;
    const r = await apiPhoto.get(url);
    return r;
  } catch (error) {
    return error;
  }
}

