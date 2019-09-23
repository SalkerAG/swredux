import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchNewFilmAction } from "../../actions/APIsActions"
import {
  validateFormAction,
  validateSuccess,
  validateError
} from "../../actions/validationsActions.js";
import Select from "react-select";

const Home = () => {
  //State
  const [title, setTitle] = useState("");

  //Crer nueva tarjeta pelicula
  const dispatch = useDispatch();
  const searchFilm = title => dispatch(searchNewFilmAction(title));
  const validateForm = () => dispatch(validateFormAction());
  const successValidate = () => dispatch(validateSuccess());
  const errorValidate = () => dispatch(validateError());

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
    if (title.value.trim() === "") {
      errorValidate();
      return;
    }
    successValidate();
    searchFilm(title.value);
  }

  return (
    <div className="row justify-content-inherit mt-5">
      <div className="col-md-3">

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

              <form className="col card text-white bg-transparent  mb-5 pt-5 pb-2" onSubmit={submitFilm}>
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
                  <div className="col-md-6">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary float-right"
                      >
                        Buscar
                  </button>
                    </div>
                  </div>
                </div>
              </form>
              {error ? (

                <div className="col-md-12">
                  <div className="font-weight-bold alert alert-primary text-center mt-10">
                    Todos los campos son obligatorios
                    </div>
                </div>

              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2">

      </div>
    </div>

  );
};

export default Home;
