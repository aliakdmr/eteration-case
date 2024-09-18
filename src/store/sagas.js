import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_PRODUCTS_REQUEST, fetchProductsSuccess, fetchProductsFailure } from './actions';

// API'yi çağıran fonksiyon
function fetchProductsApi() {
  return axios.get('https://5fc9346b2af77700165ae514.mockapi.io/products');
}

// Worker Saga: Bu fonksiyon API çağrısını yapar ve sonucu reducer'a yollar
function* fetchProducts() {
  try {
    const response = yield call(fetchProductsApi);
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

// Watcher Saga: Bu saga, FETCH_PRODUCTS_REQUEST action'ını izler
function* productSaga() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export default productSaga;
