import {
  SUCCESS_GET_DATA,
  LODDING_GET_DATA,
  ERROR_GET_DATA,
  SUCCESS_ADD_DATA,
  LODDING_ADD_DATA,
  ERROR_ADD_DATA,
  SUCCESS_UPDATE_DATA,
  LODDING_UPDATE_DATA,
  ERROR_UPDATE_DATA,  
  SUCCESS_DELETE_DATA,
  LODDING_DELETE_DATA,
  ERROR_DELETE_DATA,
  SUCCESS_GET_SINGLE,
  LODDING_GET_SINGLE,
  ERROR_GET_SINGLE
} from "../actions/types";
// get all countries
export const GetReducer = (state = { countries: [] }, action) => {
  switch (action.type) {
    case LODDING_GET_DATA:
      return { loading: true, countries: [] };
    case SUCCESS_GET_DATA:
      return { loding: false, countries : action.payload };
    case ERROR_GET_DATA:
      return { loading: false, error: action.payload.message };
    default:
      return state;
  }
};
// get single countries
export const GetSingleReducer = (state = { Singlecountry : {}}, action) => {
switch (action.type) {
  case LODDING_GET_SINGLE:
    return { ...state, loading: true };
  case SUCCESS_GET_SINGLE:
    return { loding: false, Singlecountry : action.payload };
  case ERROR_GET_SINGLE:
    return { loading: false, error: action.payload.message };
  default:
    return state;
}
};
// create country reducer 

export const countryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case LODDING_ADD_DATA:
      return { loading: true };
    case SUCCESS_ADD_DATA:
      return { loading: false, success: true, country: action.payload };
    case ERROR_ADD_DATA:
      return { loading: false, error: action.payload.message };
    default:
      return state;
  }
};

// delete country reducer 

export const countryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case LODDING_UPDATE_DATA:
      return { loading: true };
    case SUCCESS_UPDATE_DATA:
      return { loading: false, success: true , country: action.payload};
    case ERROR_UPDATE_DATA:
      return { loading: false, error: action.payload.message };
    default:
      return state;
  }
};

// delete country reducer 

export const countryUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case LODDING_DELETE_DATA:
      return { loading: true };
    case SUCCESS_DELETE_DATA:
      return { loading: false, success: true , country: action.payload};
    case ERROR_DELETE_DATA:
      return { loading: false, error: action.payload.message };
    default:
      return state;
  }
};


