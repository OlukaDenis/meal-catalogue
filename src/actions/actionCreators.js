import {
  FETCHING_CATEGORIES, FETCHING_MEALS, FETCH_LOADING, FETCHING_ERROR,
} from './types';

const fetchingCategories = categories => ({
  type: FETCHING_CATEGORIES,
  categories,
});

const fetchingMeals = meals => ({
  type: FETCHING_MEALS,
  meals,
});

const fetchLoading = () => ({
  type: FETCH_LOADING,
});

const fetchingError = error => ({
  type: FETCHING_ERROR,
  error,
});

export {
  fetchLoading,
  fetchingCategories,
  fetchingMeals,
  fetchingError,
};
