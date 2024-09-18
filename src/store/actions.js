export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SET_BRAND_FILTER_LIST = 'SET_BRAND_FILTER_LIST';
export const SET_MODEL_FILTER_LIST = 'SET_MODEL_FILTER_LIST';
export const SET_IS_CHANGE_LOCALSTORAGE = 'SET_IS_CHANGE_LOCALSTORAGE';
export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';


export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});


export const setBrandFilterList = (list) => ({
  type: SET_BRAND_FILTER_LIST,
  payload: list,
});

export const setModelFilterList = (list) => ({
  type: SET_MODEL_FILTER_LIST,
  payload: list,
});

export const setisChangeLocalStorage = (isChange) => ({
  type: SET_IS_CHANGE_LOCALSTORAGE,
  payload: isChange,
});


export const setTotalPrice = (price) => ({
  type: SET_TOTAL_PRICE,
  payload: price,
});
