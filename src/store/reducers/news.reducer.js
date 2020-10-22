import { SET_ARTICLES } from '../actionTypes';

const initialState = {
  page: 1,
  totalPages: 1,
  articles: [],
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
    default:
      return state;
  }
};
