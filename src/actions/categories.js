import { fetchLoading, fetchingCategories, fetchingError } from './actionCreators';

const fetchCategories = () => {
  return dispatch => {
    dispatch(fetchLoading());
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then(res => res.json())
    .then(result => {
      if(result.error) {
          throw(result.error);
      }
      dispatch(fetchingCategories(result.meals));
    })
    .catch(err => {
      dispatch(fetchingError(err));
    })
  }
}

export default fetchCategories;