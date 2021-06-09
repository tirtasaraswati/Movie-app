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

const allFunctionApp = {
  setLoader,
  getMovie,
  handleState,
};

export default allFunctionApp;
