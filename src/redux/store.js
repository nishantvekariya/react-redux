import { createStore, combineReducers } from "redux";
import ReduxWish from "./reducers/wish";
import cartReducer from "./reducers/cart-reducer";
import productsReducer from "./reducers/product-reducer";
import thunk from 'redux-thunk';
import { applyMiddleware } from "redux";

const rootReducer = combineReducers({
  rw: ReduxWish,
  rCart: cartReducer,
  productsReducer: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
