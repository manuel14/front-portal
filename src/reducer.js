import { combineReducers } from "redux";
import adminEventsReducer from "./containers/AdminEvents/reducer";
import adminEventDetailReducer from './containers/AdminEventDetail/reducer';
import adminNotificationsReducer from "./containers/AdminNotifications/reducer";
import adminReducer from "./containers/Admin/reducer";
import adminReceiptsReducer from './containers/AdminReceipts/reducer';
import adminSubmissionsReducer from './containers/AdminSubmission/reducer';
import adminSubmissionDetailReducer from './containers/AdminSubmissionDetail/reducer';
import absenceReducer from './containers/AbsenceSubmission/reducer';
import appReducer from "./containers/App/reducer";
import attendancesReducer from './containers/Attendances/reducer';
import attendanceDetailReducer from './containers/AttendanceDetail/reducer';
import eventsReducer from './containers/Events/reducer'
import moneySubmissionReducer from './containers/MoneySubmission/reducer';
import notificationDetailReducer from './containers/NotificationDetail/reducer';
import notificationReducer from './containers/Notifications/reducer';
import { reducer as notifications } from 'react-notification-system-redux';
import receiptDetailReducer from "./containers/ReceiptDetail/reducer";
import receiptReducer from "./containers/Receipts/reducer";
import submissionsReducer from './containers/Submissions/reducer';
import userReducer from "./containers/User/reducer";

export default combineReducers({
  absenceReducer,
  appReducer,
  attendancesReducer,
  attendanceDetailReducer,
  adminEventsReducer,
  adminEventDetailReducer,
  adminNotificationsReducer,
  adminReducer,
  adminReceiptsReducer,
  adminSubmissionsReducer,
  adminSubmissionDetailReducer,
  eventsReducer,
  moneySubmissionReducer,
  notifications,
  notificationDetailReducer,
  notificationReducer,
  receiptDetailReducer,
  receiptReducer,
  submissionsReducer,
  userReducer
});
