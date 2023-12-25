import { combineReducers } from "redux";
import cartReducer from "./Slices/CartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;