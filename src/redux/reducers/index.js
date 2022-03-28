import { combineReducers } from 'redux';
import {  clientsReducer, sendFormReducer } from './reducers';

const rootReducer = combineReducers({
  clientsReducer,
  sendFormReducer,
});

export default rootReducer;
