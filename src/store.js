import { createStore, applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './redux/reducers';
import { createLogger } from 'redux-logger'
const loggerMiddleware = createLogger();



const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
      )
);

export default store;
