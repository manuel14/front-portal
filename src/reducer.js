import { combineReducers } from "redux";
import appReducer from "./containers/App/reducer";
import userReducer from "./containers/User/reducer";
import receiptReducer from "./containers/Receipts/reducer";
import receiptDetailReducer from "./containers/ReceiptDetail/reducer";
import adminReducer from "./containers/Admin/reducer";
import adminNotificationsReducer from "./containers/AdminNotifications/reducer";
import { reducer as notifications } from 'react-notification-system-redux';

export default combineReducers({
  appReducer,
  userReducer,
  receiptReducer,
  receiptDetailReducer,
  adminReducer,
  adminNotificationsReducer,
  notifications
});
