import { SET_INGREDIENTS, FETCH_LOADING, FETCHING_ERROR } from '../actions/types';

const initialState = {
  ingredient: '',
};

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_INGREDIENTS:
      return {
        ...state,
        loading: false,
        ingredient: action.ingredient,
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

export default ingredientReducer;
