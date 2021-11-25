import { combineReducers } from 'redux';
import {
  productListReducers,
  productDetailsReducers,
  productDeleteReducers,
  productCreateReducers,
  productUpdateReducers,
  productCreateReviewReducers,
  topProdutsReducers,
} from './productListReducers';
import {
  userLoginReducers,
  userRegisterReducers,
  userUpdateProfileReducers,
  userDetailReducers,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './userReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  myOrderListReducer,
  orderListReducer,
  orderDeliverReducer,
} from './orderReducers';
import { cartReducer } from './cartReducer';

const reducer = combineReducers({
  productList: productListReducers, // we acces this form the name of productList in components
  productDetails: productDetailsReducers,
  productDelete: productDeleteReducers,
  productCreate: productCreateReducers,
  productUpdate: productUpdateReducers,
  productReview: productCreateReviewReducers,
  topProducts: topProdutsReducers,
  cart: cartReducer,

  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
  userDetails: userDetailReducers,
  userUpdateProfile: userUpdateProfileReducers,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,

  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDeliver: orderDeliverReducer,
});

export default reducer;
