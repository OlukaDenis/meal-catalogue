import { FETCHING_DISH, FETCH_LOADING, FETCHING_ERROR } from '../actions/types';

const initialState = {
  loading: false,
  dish: {},
  error: null,
};

const dishReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };

    case FETCHING_DISH:
      return {
        ...state,
        dish: action.dish,
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

export default dishReducer;
