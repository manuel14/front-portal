import moment from 'moment';

const dateFormat = 'MM-DD-YYYY';
const dateTimeFormat = 'MM-DD-YYYY hh:mm A';
const requestsTimeFormat = 'YYYY-MM-DD';

const rangeOptions = [
  { label: '1 Week', value: { startDate: moment().subtract(7, 'days') } },
  { label: '2 Weeks', value: { startDate: moment().subtract(14, 'days') } },
  { label: '30 Days', value: { startDate: moment().subtract(30, 'days') } },
  { label: '60 Days', value: { startDate: moment().subtract(60, 'days') } },
];

export const DEFAULT_RANGE_OPTION = 2;

export const TASK_STATE_PENDING = 'Pending';
export const TASK_STATE_CLOSED = 'Closed';
export const TASK_STATE_ESCALATED = 'Escalated';
export const TASK_RISK_MEDIUM = 'medium';
export const TASK_RISK_HIGH = 'high';

export { dateFormat, dateTimeFormat, rangeOptions, requestsTimeFormat };
