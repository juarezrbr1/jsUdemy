import { combineReducers } from "redux";
import exampleReducer from './example/reducer';

export default combineReducers({
  // Add reducers here
  example: exampleReducer,
});
