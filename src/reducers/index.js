import { combineReducers } from 'redux';
import categoryReducer from './categories';

const reducer = combineReducers({
  categoryReducer,
})

export default reducer;