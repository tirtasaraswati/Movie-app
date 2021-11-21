import * as types from "./../../config/actionType";

const initState = {
  isLoading: false,
  isResponse: false,
  isError: "No Data",
  poster: "",
  listMovie: [],
  search: {
    title: "",
  },
  isMore: false,
  page: 1,
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
        isError: action.isError,
        isMore: action.isMore,
        page: action.page,
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
    case types.CLEAR_DATA_DETAIL:
      return {
        ...state,
        dataDetail: {},
      };
    default:
      return state;
  }
};
