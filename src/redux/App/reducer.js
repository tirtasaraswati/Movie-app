import * as types from "./../../config/actionType";

const initState = {
  isLoading: false,
  search: {
    title: "",
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.SET_LOADER:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case types.HANDLE_STATE:
      return {
        ...state,
        search: {
          ...state.search,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
};
