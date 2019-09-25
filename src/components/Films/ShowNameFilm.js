import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    filmCharactersAction,
  } from "../../actions/APIsFilmsActions";
import Spin from "../Layout/Spin";
import ShowDetailsFilm from "./ShowDetailsFilm"
const ShowNameFilm = ({FilmsCharacter}) => {
    const dispatch = useDispatch();
    const detailsFilm = () => dispatch(filmCharactersAction(FilmsCharacter));
    const films = useSelector(state => state.apis.films);
    const loading = useSelector(state => state.apis.loading);

    useEffect(() => {
        detailsFilm();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    return (
        <>
            {loading ? <Spin /> : ((films === undefined) ? null : (
                films.map((film, index) => (
                    <ShowDetailsFilm film={film} key={index}/>
                ))
            ))}
        </>
    );
};

export default ShowNameFilm;