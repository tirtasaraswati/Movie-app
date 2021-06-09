import * as types from "../../config/actionType";

export const setLoader = (isLoading) => {
  return {
    type: types.SET_LOADER,
    isLoading,
  };
};

export const handleState = (field, value) => {
  return {
    type: types.HANDLE_STATE,
    field,
    value,
  };
};
