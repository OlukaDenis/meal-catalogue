import { FETCHING_CATEGORIES, FETCH_LOADING, FETCHING_ERROR } from './types';

const fetchingCategories = (categories) => {
  return {
    type: FETCHING_CATEGORIES,
    categories: categories,
  }
}

const fetchLoading = () => {
  return {
    type: FETCH_LOADING,
  }
}

const fetchingError = (error) => {
  return {
    type: FETCHING_ERROR,
    error: error,
  }
}

export {
  fetchLoading,
  fetchingCategories,
  fetchingError
}