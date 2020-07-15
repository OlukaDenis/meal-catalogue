import { combineReducers } from 'redux';
import categoryReducer from './categories';

const reducer = combineReducers({
  categories: categoryReducer,
})

export default reducer;