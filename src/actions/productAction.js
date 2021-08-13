import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCt_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCt_DETAILS_FAIL
} from '../constants/productConstants';

import axios from 'axios';

// get data and dispatch to product-reducer
// redux-thunk help us in async-request
// basically thunk add a fun in fun

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST }); // dispatch request basically it goes to product reducer and set loading:true and products:[]

    const { data } = await axios.get('/api/products');

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  
  } catch (error) {
    dispatch({
      type:PRODUCt_LIST_FAIL,
      payload:error.response && error.response.data.message ?error.response.data.message :error.message
    })
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST }); 

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCt_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
