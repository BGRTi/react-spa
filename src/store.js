import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger()

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;
