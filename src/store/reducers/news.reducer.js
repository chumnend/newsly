import {
  SET_ARTICLES,
  SET_URL,
  ADD_SOURCE,
  FETCHING,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from '../actionTypes';

const initialState = {
  fetching: false,
  error: null,
  page: 1,
  totalPages: 1,
  articles: [],
  url: '',
  query: '',
  sources: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        page: action.page,
        totalPages: action.totalPages,
        articles: action.articles,
      };
    case SET_URL:
      return {
        ...state,
        url: action.url,
      };
    case ADD_SOURCE:
      return {
        ...state,
        sources: [...state.sources, action.source],
      };
    case FETCHING:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
