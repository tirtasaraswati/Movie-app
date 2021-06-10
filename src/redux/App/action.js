import * as types from "../../config/actionType";

export const setLoader = (isLoading) => {
  return {
    type: types.SET_LOADER,
    isLoading,
  };
};

export const getMovie = () => {
  return {
    type: types.GET_MOVIE,
  };
};

export const handleState = (field, value) => {
  return {
    type: types.HANDLE_STATE,
    field,
    value,
  };
};

export const getPoster = (value) => {
  return {
    type: types.GET_POSTER,
    value,
  };
};

export const getDetail = (value) => {
  return {
    type: types.GET_DETAIL,
    value,
  };
};

const allFunctionApp = {
  setLoader,
  getMovie,
  handleState,
  getPoster,
  getDetail,
};

export default allFunctionApp;
