import React from "react";
import { Link } from "react-router-dom"
import { useDispatch} from "react-redux";
import {cleanSearch} from "../../actions/APIsActions"
const Header = () => {

    return (
        <>
            <div className="container mt-5">
                <legend className="text-center">Buscador Peliculas Star Wars</legend>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 justify-content-center mt-3 mb-3">
                        <Link
                            to={"/peliculas"}
                            className="btn btn-danger d-block "
                        >Peliculas</Link>
                    </div>
                    <div className="col-sm-6 justify-content-center mt-3 mb-3">
                        <Link
                            to={"/personajes"}
                            className="btn btn-danger d-block"
                        >Personajes</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
