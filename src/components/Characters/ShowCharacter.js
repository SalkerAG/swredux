import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nameCharactersAction } from "../../actions/APIsCharactersActions";
import ShowDetailsCharacter from "./ShowDetailsCharacter"
import Spin from "../Layout/Spin";

const ShowCharacter = charactersURL => {

  const dispatch = useDispatch();
  const CharName = () => dispatch(nameCharactersAction(charactersURL.characters));
  const characters = useSelector(state => state.apisCharacter.characters);
  const loading = useSelector(state => state.apisCharacter.loading);

  useEffect(() => {
    CharName();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    {loading ? <Spin /> : (
      characters.map((character, index) => (
        <ShowDetailsCharacter character={character} key={index}/>
      ))
    )}
    </>
  )
};

export default ShowCharacter;
