import axios from "axios";
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
} from "./types";

export const GetAll = (keyword = " ") => async dispatch => {
  try {
    dispatch({ type: LODDING_GET_DATA });

    const { data } = await axios.get(`http://localhost:8000?keyword=${keyword}`);
    dispatch({ type: SUCCESS_GET_DATA, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ERROR_GET_DATA,
      payload: message
    });
  }
};
export const GetSingleAction = (id) => async dispatch => {
  try {
    dispatch({ type: LODDING_GET_SINGLE });

    const { data } = await axios.get(`http://localhost:8000/${id}`);
    dispatch({ type: SUCCESS_GET_SINGLE, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ERROR_GET_SINGLE,
      payload: message
    });
  }
};
export const CreatecountryAction = ({
  domains,
  country,
  name,
  code,
  link
}) => async dispatch => {
  try {
    dispatch({ type: LODDING_ADD_DATA });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.post(
      "http://localhost:8000",
      {
        domains,
        country,
        name,
        code,
        link
      },
      config
    );
    dispatch({ type: SUCCESS_ADD_DATA, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ERROR_ADD_DATA,
      payload: message
    });
  }
};

export const DeleteCountryAction = id => async dispatch => {
  try {
    dispatch({ type: LODDING_DELETE_DATA });

    await axios.delete(`http://localhost:8000/${id}`);
    dispatch({ type: SUCCESS_DELETE_DATA });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ERROR_DELETE_DATA,
      payload: message
    });
  }
};

export const UpdateCountryAction = (
  id,
 { domains,
  country,
  name,
  code,
  link}
) => async dispatch => {
  try {
    dispatch({ type: LODDING_UPDATE_DATA });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.put(
      `http://localhost:8000/${id}`,
      {
        domains,
        country,
        name,
        code,
        link
      },
      config
    );
    dispatch({type : SUCCESS_UPDATE_DATA , payload : data })
  } catch (error) {
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  dispatch({
    type: ERROR_UPDATE_DATA,
    payload: message
  });
}
  
};
