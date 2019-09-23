import { combineReducers } from "redux";
import validationsReducer from "./validationsReducer";
import APIsReducer from "./APIsFilmReducer";

export default combineReducers({
  error: validationsReducer,
  apis: APIsReducer
});
