import { combineReducers } from 'redux';
import cartReducer from './cart';
import itemReducer from './item';
import loadReducer from './load';


const rootReducer = combineReducers({
  cartReducer,
  itemReducer,
  loadReducer
});


export default rootReducer;
