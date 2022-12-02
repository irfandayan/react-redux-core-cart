import { combineReducers } from 'redux';
import { productsReducer, selectedProductReducer } from './productsReducer';

// combine all the reducers
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductReducer,
});
export default reducers;
