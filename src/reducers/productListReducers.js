import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCt_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCt_DETAILS_FAIL,
} from '../constants/productConstants';

//* it takes two things *initial state , *action
const initialState = {
  products: [],
};

export const productListReducers = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST: // requesting for products
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS: // when success show the data
      return { loading: false, products: action.payload };
    case PRODUCt_LIST_FAIL: // when fail show the error
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
// after creating the reducer add reducer to the store so we access this from anywhere

export const productDetailsReducers = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST: // requesting for products
      return { loading: true, ...state }; //  add whatever in the current state
    case PRODUCT_DETAILS_SUCCESS: // when success show the data
      return { loading: false, product: action.payload };
    case PRODUCt_DETAILS_FAIL: // when fail show the error
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
