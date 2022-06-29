import { combineReducers } from "redux";
import {
  GetReducer,
  GetSingleReducer,
  countryCreateReducer,
  countryDeleteReducer,
  countryUpdateReducer
} from "../reducers/countriesReducers.js";

export const Reducers = combineReducers({
  GetReducer,
  GetSingleReducer,
  countryCreateReducer,
  countryDeleteReducer,
  countryUpdateReducer
});
