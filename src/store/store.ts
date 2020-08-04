import { applyMiddleware, createStore, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from '../sagas/index';
import rootReducer from '../reducers/index';

import middlewares, { sagaMiddleware, history } from './middleware';

export const reducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  combineReducers({ router: connectRouter(history), rootReducer })
);

const configStore = (initialState = {}) => {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      store.replaceReducer(require('../reducers/index').default);
    });
  }

  return store;
};

const store = configStore();
const persistor = persistStore(store);

export { store, persistor };
