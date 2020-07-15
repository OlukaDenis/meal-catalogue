import { combineReducers } from 'redux';
import categoryReducer from './categories';
import mealReducer from './meals';

const reducer = combineReducers({
  categories: categoryReducer,
  meals: mealReducer,
});

export default reducer;
