import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchNewFilmAction,
  cleanSearchAction
} from "../../actions/APIsFilmsActions";
import {
  validateFormAction,
  validateSuccess,
  validateError
} from "../../actions/validationsActions";
import Select from "react-select";
import ShowFilmSearch from "../Films/ShowFilmSearch";
import Spin from "../Layout/Spin";
import Carousel from "../Characters/Carousel";
import FilmListLocalStorage from "../Films/FilmListLocalStorage";

const Home = () => {
  // State inicial para el listado de films
  let filmsInitial = JSON.parse(localStorage.getItem("films"));
  if (!filmsInitial) {
    filmsInitial = [];
  }

  const [films] = useState(filmsInitial);

  //State
  const [title, setTitle] = useState("");

  //Crer nueva tarjeta film
  const dispatch = useDispatch();
  const searchFilm = title => dispatch(searchNewFilmAction(title));
  const cleanSearch = () => dispatch(cleanSearchAction());
  const validateForm = () => dispatch(validateFormAction());
  const successValidate = () => dispatch(validateSuccess());
  const errorValidate = () => dispatch(validateError());
  const loading = useSelector(state => state.apis.loading);
  const film = useSelector(state => state.apis.film);

  //Opciones búsqueda select
  const options = [
    { value: "A New Hope", label: "A New Hope" },
    { value: "Attack of the Clones", label: "Attack of the Clones" },
    { value: "The Phantom Menace", label: "The Phantom Menace" },
    { value: "Revenge of the Sith", label: "Revenge of the Sith" },
    { value: "Return of the Jedi", label: "Return of the Jedi" },
    { value: "The Empire Strikes Back", label: "The Empire Strikes Back" },
    { value: "The Force Awakens", label: "The Force Awakens" }
  ];

  //Obtener los datos del state
  const error = useSelector(state => state.error.error);

  //Realizar búsqueda en la API de Película
  const submitFilm = e => {
    e.preventDefault();

    validateForm();
    if (title.value === undefined || title.value.trim() === "") {
      errorValidate();
      return;
    }
    successValidate();

    searchFilm(title.value);
  };

  //Método para insertar las películas en localStorage cuando un componente cambie
  const insertFilm = film => {
    if (JSON.stringify(film) !== "{}") {
      var insert = true;
      if (Object.keys(films).length === 0) {
        films.push(film);
        console.log(Object.keys(films[0]).length === 0);

        localStorage.setItem("films", JSON.stringify(films));
      } else {
        // eslint-disable-next-line array-callback-return
        films.map((element, index) => {
          if (element.title === film.title) {
            insert = false;
          }
        });
        if (insert) {
          films.push(film);
          localStorage.setItem("films", JSON.stringify(films));
        }
      }
    }
  };

  //Método para ir insertando las películas cuando se vaya acutalizando el state
  useEffect(() => {
    if (film !== {}) insertFilm(film);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [film]);
  return (
    <>
      <div className="row justify-content-inherit mt-5">
        <div className="col-md-3">
          <h2 className="text-center">PELICULAS VISITADAS</h2>
          <FilmListLocalStorage films={films} />
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="h2-form text-center mb-4">
                    ¡Encuentra tu película!
                  </h2>
                </div>

                <form
                  className="col card text-white bg-transparent  mb-5 pt-5 pb-2"
                  onSubmit={submitFilm}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <Select
                          placeholder="Título..."
                          className="text-dark"
                          options={options}
                          value={title}
                          onChange={value => setTitle(value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="form-control btn btn-primary float-right"
                        >
                          Buscar
                        </button>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <button
                          type="reset"
                          onClick={() => cleanSearch()}
                          className="form-control btn btn-primary float-right"
                        >
                          Limpiar
                        </button>
                      </div>
                    </div>
                  </div>
                  {error ? (
                    <div className="font-weight-bold alert alert-danger text-center mt-4">
                      Todos los campos son obligatorios
                    </div>
                  ) : (
                    <>
                      {loading ? (
                        <Spin />
                      ) : Object.keys(film).length === 0 ? null : (
                        <ShowFilmSearch film={film} />
                      )}
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h2 className="text-center">CARRUSEL PERSONAJES</h2>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Home;
