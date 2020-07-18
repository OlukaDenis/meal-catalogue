import { FETCHING_CATEGORIES, FETCH_LOADING, FETCHING_ERROR } from '../actions/types';

const initialState = {
  loading: false,
  categories: [],
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };

    case FETCHING_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
        loading: false,
      };

    case FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default categoryReducer;
