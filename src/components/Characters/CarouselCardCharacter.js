import React from "react";

import { Link } from "react-router-dom";

const CarouselCardCharacter = ({ character }) => {
  var idAPI = character.url.substr(32, 2);
  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{character.name}</h4>
          <div className="card-text">
            <p>Género: {character.gender}</p>
            <p>Peso: {character.mass} kgs.</p>
            <p>Altura: {character.height} cms.</p>
            <p>Fecha de nacimiento: {character.birth_year}</p>
          </div>
          <Link
            to={{
              pathname: `/personajes/${idAPI}`,
              state: { character: { character } }
            }}
            className="btn btn-primary"
          >
            ¡Más información!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselCardCharacter;
