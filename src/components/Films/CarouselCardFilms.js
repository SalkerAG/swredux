import React from "react";

import { Link } from "react-router-dom";

const CarouselCardCharacter = ({ film }) => {
  var idAPI = film.url.substr(31, 1);
  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{film.title}</h4>
            <div className="card-text">
              <p>Episodio: {film.episode_id}.</p>
              <p>Director: {film.director}</p>
              <p>Productor/es: {film.producer}</p>
              <p>Fecha de estreno: {film.release_date}</p>
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
      </div>
    </>
  );
};

export default CarouselCardCharacter;
