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
