import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import productReducer from './reducer';
import productSaga from './sagas';

// Saga middleware'i oluştur
const sagaMiddleware = createSagaMiddleware();

// Redux store'u oluştur ve saga middleware'i ekle
const store = createStore(
  productReducer,
  applyMiddleware(sagaMiddleware)
);

// Saga'yı çalıştır
sagaMiddleware.run(productSaga);

export default store;
