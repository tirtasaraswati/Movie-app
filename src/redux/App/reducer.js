import * as types from "./../../config/actionType";

const initState = {
  isLoading: false,
  listMovie: [],
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
    case types.GET_MOVIE_SUCCESS:
      return {
        ...state,
        listMovie: action.payload,
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
