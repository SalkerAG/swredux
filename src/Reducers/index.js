import { combineReducers } from "redux";
import validationsReducer from "./validationsReducer";
import APIsFilmReducer from "./APIsFilmReducer";
import APIsCharacterReducer from "./APIsCharacterReducer";

export default combineReducers({
  error: validationsReducer,
  apis: APIsFilmReducer,
  apisCharacter: APIsCharacterReducer
});
