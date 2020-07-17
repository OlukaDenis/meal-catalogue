import { combineReducers } from 'redux';
import categoryReducer from './categories';
import mealReducer from './meals';
import dishReducer from './dish';
import ingredientReducer from './ingredients';

const reducer = combineReducers({
  categories: categoryReducer,
  meals: mealReducer,
  dish: dishReducer,
  ingredient: ingredientReducer,
});

export default reducer;
