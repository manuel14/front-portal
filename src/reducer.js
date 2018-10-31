import { combineReducers } from "redux";
import adminEventsReducer from "./containers/AdminEvents/reducer";
import adminEventDetailReducer from './containers/AdminEventDetail/reducer';
import adminNotificationsReducer from "./containers/AdminNotifications/reducer";
import adminReducer from "./containers/Admin/reducer";
import adminReceiptsReducer from './containers/AdminReceipts/reducer';
import appReducer from "./containers/App/reducer";
import attendancesReducer from './containers/Attendances/reducer';
import attendanceDetailReducer from './containers/AttendanceDetail/reducer';
import eventsReducer from './containers/Events/reducer'
import notificationDetailReducer from './containers/NotificationDetail/reducer';
import notificationReducer from './containers/Notifications/reducer';
import { reducer as notifications } from 'react-notification-system-redux';
import receiptDetailReducer from "./containers/ReceiptDetail/reducer";
import receiptReducer from "./containers/Receipts/reducer";
import userReducer from "./containers/User/reducer";

export default combineReducers({
  appReducer,
  attendancesReducer,
  attendanceDetailReducer,
  adminEventsReducer,
  adminEventDetailReducer,
  adminNotificationsReducer,
  adminReducer,
  adminReceiptsReducer,
  eventsReducer,
  notifications,
  notificationDetailReducer,
  notificationReducer,
  receiptDetailReducer,
  receiptReducer,
  userReducer
});
