import { combineReducers } from 'redux';

/* Import reducers and combine them below */
import exampleReducer from './example';
import booksReducer from './products';

export default combineReducers({
    exampleaction:exampleReducer,
    booksReducer:booksReducer
});
