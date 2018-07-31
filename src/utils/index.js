import moment from 'moment';
import { map, get, uniqBy, orderBy, filter as _filter } from 'lodash';

function shortDate(dateString) {
  const date = new Date(dateString);
  return `${date.getUTCMonth() + 1}/${date.getUTCDate()}`;
}

function shortMonthName(dateString) {
  return moment.utc(dateString).format('MMM YYYY');
}

function isFormSubmitted(form) {
  return moment(form.next_submit_date).isAfter(moment());
}

function addFormSubmissionState(forms) {
  return forms.map(f => ({ ...f, submitted: isFormSubmitted(f) }));
}

function safeString(str) {
  return str !== 'null' && str !== '0' ? str : null;
}

const getFilterLabel = (items, allLabel) => {
  if (items instanceof Array && items.length > 1) {
    return allLabel;
  }
  return undefined;
};

export const format = dateStr => moment(dateStr).format('MM-DD-YYYY hh:mm A');
export const formatUtcNoTime = dateStr =>
  moment.utc(dateStr).format('MM-DD-YYYY');
export const fromNow = dateStr => moment(dateStr).fromNow();
export const convertMS = ms => {
  let d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return { d, h, m, s };
};
export const formatDuration = duration => {
  const item = convertMS(duration);
  const days = `${item.d} days`;
  const hours = `${item.m < 30 ? item.h : item.h + 1} hrs`;
  return `${days} ${item.h > 0 ? hours : ''}`;
};

function mapLocationOptions(items) {
  return orderBy(
    items.map(item => {
      return {
        value: item.id,
        label: item.id === -1 ? item.name : `${item.store_num} - ${item.name}`,
        store: item.id === -1 ? item.id : item.store_num,
        customer: item.id === -1 ? item.id : item.customer_id,
      };
    }),
    ['store'],
  );
}

export const mapOptions = ({
  items,
  labelKey,
  valueKey,
  allLabel,
  labelFn,
  filter,
}) => {
  const all = allLabel ? [{ value: null, label: allLabel }] : [];

  const options = uniqBy(
    map(_filter(items, filter), item => ({
      value: valueKey ? get(item, valueKey) : get(item, labelKey),
      label: labelFn ? labelFn(get(item, labelKey)) : get(item, labelKey),
    })),
    'value',
  );
  return [...all, ...options];
};

export const getRangeOptions = group => {
  return [
    {
      label: `4 ${group.value}s`,
      value: { startDate: moment().subtract(4, group.value) },
    },
    {
      label: `6 ${group.value}s`,
      value: { startDate: moment().subtract(6, group.value) },
    },
    {
      label: `8 ${group.value}s`,
      value: { startDate: moment().subtract(8, group.value) },
    },
  ];
};

export {
  shortDate,
  shortMonthName,
  isFormSubmitted,
  addFormSubmissionState,
  getFilterLabel,
  safeString,
  mapLocationOptions,
};
