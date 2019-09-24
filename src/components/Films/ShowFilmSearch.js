import React from "react";
import { Link } from "react-router-dom";
function filmEncontrada({ film }) {
  var idAPI = film.url.substr(31, 1);
  return (
    <>
      <h2 className="h2-form text-center mt-2">
        ¡Se ha encontrado una película!
      </h2>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title" style={{ color: "black" }}>
            {film.title}
          </h4>
          <div className="card-text" style={{ color: "black" }}>
            <p>Episodio: {film.episode_id}.</p>
            <p>Director: {film.director}</p>
            <p>Producida: {film.producer}</p>
            <p>Lanzamiento: {film.release_date}</p>
            <Link
              to={`/peliculas/${idAPI}`}
              className="btn btn-primary"
              params={{ id: idAPI }}
            >
              ¡Más información!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default filmEncontrada;
