import { combineReducers } from 'redux';
import categoryReducer from './categories';
import mealReducer from './meals';
import dishReducer from './dish';

const reducer = combineReducers({
  categories: categoryReducer,
  meals: mealReducer,
  dish: dishReducer,
});

export default reducer;
