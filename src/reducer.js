import { combineReducers } from "redux";
import appReducer from "./containers/App/reducer";
import userReducer from "./containers/User/reducer";
import receiptReducer from "./containers/Receipts/reducer";
import receiptDetailReducer from "./containers/ReceiptDetail/reducer";

export default combineReducers({
  appReducer,
  userReducer,
  receiptReducer,
  receiptDetailReducer
});
