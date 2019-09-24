import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nameCharactersAction } from "../../actions/APIsCharactersActions";
import Spin from "../Layout/Spin";

const ShowNameCharacter = characters => {
  const dispatch = useDispatch();
  const detailsCharactersName = () =>
    dispatch(nameCharactersAction(characters));
  const loading = useSelector(state => state.apisCharacter.loading);
  const character = useSelector(state => state.apisCharacter.character);

  useEffect(() => {
    detailsCharactersName();
  });

  return <>{loading ? null : <li>{character.name}</li>}</>;
};

export default ShowNameCharacter;
