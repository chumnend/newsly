import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { watchNews } from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware)),
  );

  sagaMiddleware.run(watchNews);

  return store;
};
