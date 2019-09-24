import api from "./config";

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

export async function nameCharacterAPI(character) {
  var idAPI = character.url.substr(28, 2);
  try {
    const url = `people/${idAPI}`;
    const r = await api.get(url);
    return r;
  } catch (error) {
    return error;
  }
}
