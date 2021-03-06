import { createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from '../reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

export default store;
