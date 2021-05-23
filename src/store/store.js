import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

//reducers
import homeReducer from './reducers/home';

//sage watch
import { watchHome } from './sagas';

//merge deducer with combineReducers()
const rootReducer = combineReducers({
  home: homeReducer,
});

const sagaMiddleware = createSagaMiddleware();


//global store for app
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchHome);

export default store;
