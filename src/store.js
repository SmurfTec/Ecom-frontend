import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducers,
  productDetailsReducers,
} from './reducers/productListReducers';
import { cartReducer } from './reducers/cartReducer';
import { userLoginReducers } from './reducers/userReducers';
import { userRegisterReducers } from './reducers/userReducers';
import { userDetailReducers } from './reducers/userReducers';
import { userUpdateProfileReducers } from './reducers/userReducers';
import { orderCreateReducer } from './reducers/orderReducers';
import { orderDetailsReducer } from './reducers/orderReducers';
import { orderPayReducer } from './reducers/orderReducers';
import { myOrderListReducer } from './reducers/orderReducers';


const reducer = combineReducers({
  productList: productListReducers, // we acces this form the name of productList in components
  productDetails: productDetailsReducers,
  cart: cartReducer,
  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
  userDetails: userDetailReducers,
  userUpdateProfile: userUpdateProfileReducers,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay:orderPayReducer,
  myOrderList:myOrderListReducer
});

// and when we take this out we use JSON.parse() to parse it back to javascripts
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
const shippingAddressFromStorage = localStorage.getItem(
  'shippingAddress'
)
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// store is implemented through provider
