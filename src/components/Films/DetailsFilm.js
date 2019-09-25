import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Spin from "../Layout/Spin";
import { useDispatch, useSelector } from "react-redux";
import {
  startDetailsFilmAction,
  cleanSearchAction
} from "../../actions/APIsFilmsActions";
import ShowCharacter from "../Characters/ShowCharacter";

const DetailsFilm = ({ match }) => {
  const dispatch = useDispatch();
  const detailsFilm = () => dispatch(startDetailsFilmAction(match.params.id));
  const cleanSearch = () => dispatch(cleanSearchAction());
  const film = useSelector(state => state.apis.film);
  const characters = useSelector(state => state.apis.film.characters);
  const loading = useSelector(state => state.apis.loading);

  useEffect(() => {
    detailsFilm(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="text-center mt-3">
          <h2>INFORMACIÓN DE LA PELÍCULA</h2>
        </div>
      </div>
      {loading ? (
        <Spin />
      ) : (
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-sm-8">
              <section className="body-crawl star-wars mt-5">
                <div className="crawl">
                  <div className="title">
                    <p>Episode {film.episode_id}</p>
                    <h1>{film.title}</h1>
                  </div>
                  <p>{film.opening_crawl}</p>
                </div>
              </section>
              <div className="btn-crawl mt-3 m-3">
                <Link
                  to={"/"}
                  type="reset"
                  onClick={() => cleanSearch()}
                  className="btn-crawl btn btn-primary"
                >
                  Volver al buscador
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <h2>{film.title}</h2>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{film.title}</h4>
                  <div className="card-text">
                    <p>Episodio: {film.episode_id}.</p>
                    <p>Director: {film.director}</p>
                    <p>Producida: {film.producer}</p>
                    <p>Lanzamiento: {film.release_date}</p>
                    <p>Personajes:</p>
                    {characters === undefined
                      ? null
                      :
                          <ShowCharacter
                            characters={characters}
                          />
                        }
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

export default DetailsFilm;
