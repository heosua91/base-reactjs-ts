import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

export const sagaMiddleware = createSagaMiddleware();

// browser history
export const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);

const middlewares = [sagaMiddleware, routerMiddleware];

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');

  middlewares.push(createLogger({ collapsed: true }));
}

export default middlewares;