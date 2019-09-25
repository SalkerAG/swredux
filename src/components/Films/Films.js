import React, {useEffect} from "react";
import CaourselCardFilms from "../Films/CarouselCardFilms"
import {filmsFullAction, cleanSearchAction} from "../../actions/APIsFilmsActions"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Spin from "../Layout/Spin";

const Films = () => {

  const dispatch = useDispatch();
  const FullFilms = () => dispatch(filmsFullAction());
  const cleanSearch = () => dispatch(cleanSearchAction());
  const films = useSelector(state => state.apis.films);
  const loading = useSelector(state => state.apisCharacter.loading);

  useEffect(() => {
    FullFilms();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <div className="container">
    {films === undefined ? null : (
      loading ? <Spin /> : (
        films.results.map((film,index) => (
          <CaourselCardFilms film={film} key={index} />
        ))
      )
    )}
    <Link
                  to={"/"}
                  type="reset"
                  onClick={() => cleanSearch()}
                  className="btn-crawl btn btn-primary mt-5 mb-3"
                >
                  Volver al buscador
    </Link>
    </div>
    </>
  );
};

export default Films;
