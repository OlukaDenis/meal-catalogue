import { FETCHING_MEALS, FETCH_LOADING, FETCHING_ERROR } from '../actions/types';

const initialState = {
  loading: false,
  meals: [],
  error: null,
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };

    case FETCHING_MEALS:
      return {
        ...state,
        meals: action.meals,
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

export default mealReducer;
