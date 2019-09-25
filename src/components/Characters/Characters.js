import React from "react";
import Carousel from "./Carousel"
import {cleanSearchAction} from "../../actions/APIsFilmsActions"
import {Link} from "react-router-dom"
import { useDispatch} from "react-redux";

const Characters = () => {

  const dispatch = useDispatch();
  const cleanSearch = () => dispatch(cleanSearchAction());

  return (
    <div className="container mt-5">
      <Carousel />
      <Link
                  to={"/"}
                  type="reset"
                  onClick={() => cleanSearch()}
                  className="btn-crawl btn btn-primary mt-5 mb-3"
                >
                  Volver al buscador
    </Link>
    </div>
  );
};

export default Characters;
