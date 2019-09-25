import { combineReducers } from "redux";
import validationsReducer from "./validationsReducer";
import APIsFilmReducer from "./APIsFilmReducer";
import APIsCharacterReducer from "./APIsCharacterReducer";
import APIsPhotosReducer from "./APIsPhotosReducer"

export default combineReducers({
  error: validationsReducer,
  apis: APIsFilmReducer,
  apisCharacter: APIsCharacterReducer,
  apisPhoto: APIsPhotosReducer
});
