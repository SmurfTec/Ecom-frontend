import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';

// also passing getState that allow us to get entire state-tree
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  // after dispatching we have to save this to our local storage
  // we can only save string in localStorage
  // and when we take this out we use JSON.parse() to parse it back to javascripts
  // we will get this from  store  to fill the state

  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cart.cartItems)
  );
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  // remove from localstorage
  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cart.cartItems)
  );
};


export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  // save to localstorage
  localStorage.setItem(
    'shippingAddress',
    JSON.stringify(data)
  );
};
