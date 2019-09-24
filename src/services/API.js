import api from "./config"

export async function FilmAPI(title) {
  if (Object.keys(title).length === 0) return null;
  var newTitle = title.split(/[ ]+/).join("+");

  try {
    const url = `films/?search=${newTitle}`;
    const r = await api.get(url);
    console.log("TCL: FilmAPI -> r", r);
    return r;
  } catch(error ) {
    console.log(error)
  }
}
