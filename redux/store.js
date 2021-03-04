import {
  createStore,
  combineReducers,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import cartItem from "./reducers/cartItem";

const reducer = combineReducers({
  // cart Reducer
  cartItems: cartItem,
});

const store = createStore(reducer, composeWithDevTools(thunkMiddleware));

export default store;
