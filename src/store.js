import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducers,
  productDetailsReducers,
} from './reducers/productListReducers';

const reducer = combineReducers({
  productList: productListReducers, // we acces this form the name of productList in components
  productDetails: productDetailsReducers,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// store is implemented through provider
