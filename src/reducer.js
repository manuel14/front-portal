import { combineReducers } from "redux";
import appReducer from "./containers/App/reducer";
import userReducer from "./containers/User/reducer";
import receiptReducer from "./containers/Receipts/reducer";

export default combineReducers({
  appReducer,
  userReducer,
  receiptReducer
});
