import * as types from "./../../config/actionType";

const initState = {
  isLoading: false,
  isResponse: "",
  poster: "",
  listMovie: [],
  search: {
    title: "",
  },
  dataDetail: {},
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
        isResponse: action.isResponse,
      };
    case types.HANDLE_STATE:
      return {
        ...state,
        search: {
          ...state.search,
          [action.field]: action.value,
        },
      };
    case types.GET_POSTER_SUCCESS:
      return {
        ...state,
        poster: action.payload,
        isPoster: action.isPoster,
      };
    case types.GET_DETAIL_SUCCESS:
      return {
        ...state,
        dataDetail: action.payload,
      };
    default:
      return state;
  }
};
