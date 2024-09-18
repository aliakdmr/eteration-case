import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, SET_BRAND_FILTER_LIST, SET_MODEL_FILTER_LIST, SET_IS_CHANGE_LOCALSTORAGE, SET_TOTAL_PRICE } from './actions';

const initialState = {
  loading: false,
  products: [],
  error: '',
  brandFilterList: [],
  modelFilterList: [],
  isChangeLocalStorage: false,
  totalPrice: 0
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: '',
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };
    case SET_BRAND_FILTER_LIST:
      return {
        ...state,
        brandFilterList: action.payload
      };
      case SET_MODEL_FILTER_LIST:
      return {
        ...state,
        modelFilterList: action.payload
      };
      case SET_IS_CHANGE_LOCALSTORAGE:
      return {
        ...state,
        isChangeLocalStorage: action.payload
      };
      case SET_TOTAL_PRICE:
        return {
          ...state,
          totalPrice: action.payload
        };
    default:
      return state;
  }
};

export default productReducer;
