import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Spin from "../Layout/Spin";
import { useDispatch, useSelector } from "react-redux";
import {
    DetailsCharactersAction
} from "../../actions/APIsCharactersActions";
import {
    cleanSearchAction
  } from "../../actions/APIsFilmsActions";
import ShowNameFilm from "../Films/ShowNameFilm"
import ShowPhoto from "../Photos/ShowPhoto"

const DetailsCharacter = ({match}) => {

    const dispatch = useDispatch();
    const detailsCharacter = () => dispatch(DetailsCharactersAction(match.params.id))
    const cleanSearch = () => dispatch(cleanSearchAction());
    const character = useSelector(state => state.apisCharacter.character);
    const loading = useSelector(state => state.apisCharacter.loading);

    useEffect(() => {
        detailsCharacter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
            <>
              <div className="container">
                <div className="text-center mt-3">
                  <h2>INFORMACIÓN DEL PERSONAJE</h2>
                </div>
              </div>
              {loading ? <Spin /> : (
              <div className="container-fluid mt-4">
                <div className="row">
                  <div className="col-sm-8">
                    <h2>{character.name}</h2>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">{character.name}</h4>
                        <div className="card-text">
                          <p>Año de nacimiento: {character.birth_year}.</p>
                          <p>Color de ojos: {character.eye_color}</p>
                          <p>Género: {character.gender}</p>
                          <p>Color de pelo: {character.hair_color}</p>
                          <p>Altura: {character.height} cms.</p>
                          <p>Peso: {character.mass} kgs.</p>
                          <p>Color de piel: {character.skin_color}</p>
                        </div>
                      </div>
                    </div>
                    <Link
                  to={"/"}
                  type="reset"
                  onClick={() => cleanSearch()}
                  className="btn-crawl btn btn-primary mt-3"
                >
                  Volver al buscador
                </Link>
                  </div>
                  <div className="col-sm-4">
                    <h2>Peliculas</h2>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Peliculas del personaje</h4>
                        <div className="card-text">
                          <p>Peliculas:</p>
                          <ul>
                          {character.films === undefined ? null : <ShowNameFilm FilmsCharacter={character.films}/>
                          }
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Fotos del personaje</h4>
                        <div className="card-text">
                        {Object.keys(character).length === 0 ? null : <ShowPhoto character={character} />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}
        </>
    );
};

export default DetailsCharacter;