import { color } from './color';
import { shortDate, shortMonthName } from './';
import { head } from 'lodash';

const attendanceColor = item => {
  switch (true) {
    case item.no_show_case_count === 0:
      return color.success;
    case item.no_show_case_count > 0:
      return color.danger;
    default:
      return color.default;
  }
};

const attendancePercentageColor = item => {
  if (item.no_show_percentage === null) return color.default;
  switch (true) {
    case item.no_show_percentage < 0.04:
      return color.success;
    case item.no_show_percentage >= 0.04 && item.no_show_percentage < 0.1:
      return color.warning;
    case item.no_show_percentage >= 0.1:
      return color.danger;
    default:
      return color.default;
  }
};

const attendancePercentageTooltip = item => item.no_show_percentage_label;

const attendanceText = item =>
  item.no_show_case_count !== null ? item.no_show_case_count : '-';

const axisFn = item => shortDate(item.date);

const monthAxisFn = item => shortMonthName(item.date);
const dayAxisFn = item => shortDate(item.date);

const chartAxisFn = group => {
  if (group) {
    switch (group.value) {
      case 'day':
      case 'week':
        return dayAxisFn;
      default:
        return monthAxisFn;
    }
  }
  return monthAxisFn;
};

const casesColor = item => {
  if (item.case_count === null) return color.default;
  switch (true) {
    case item.case_count > 0:
      return color.warning;
    default:
      return color.success;
  }
};

const casesText = item => item.case_count;

const inspectionsColor = item => {
  switch (item.color) {
    case 'red':
      return color.danger;
    case 'yellow':
      return color.warning;
    case 'green':
      return color.success;
    default:
      return color.default;
  }
};

const inspectionsTooltip = item => {
  return [
    `Green: ${item['green']}`,
    `Yellow: ${item['yellow']}`,
    `Red: ${item['red']}`,
    `NA: ${item['na']}`,
  ].join('\n');
};

const locationTypeTooltip = item => {
  return '';
};

const inspectionsValid = item => {
  return item.color !== 'na';
};

const complianceValue = (compliance, kpi) => {
  if (compliance && compliance.length === 1) {
    const value = head(compliance).compliance * 100;
    return value > 0 ? parseFloat(value.toFixed(1)) : 0;
  }
  return null;
};

const locationTypeColor = id => {
  return color.hasOwnProperty(`chart${id}`)
    ? color[`chart${id}`]
    : color.default;
};

const sourceColor = id => {
  switch (id) {
    case 0:
      return color.lightBlue;
    case 1:
      return color.warning;
    default:
      return color.default;
  }
};

const mapChartData = (metrics, key) => {
  return metrics.length === 0
    ? metrics
    : metrics[0].statistics.map((s, i) => {
        const values = metrics.reduce((obj, cur) => {
          return {
            ...obj,
            [cur[key]]: cur.statistics[i].average,
          };
        }, {});
        return { date: s.date, ...values };
      });
};

const mapKeys = (metrics, key) =>
  metrics.length > 0 ? metrics.map(m => m[key]) : [];

const mapColors = (keys, colorFn) =>
  keys.length > 0 ? keys.map(k => colorFn(k)) : [];

export const chartAxisLabel = group => {
  if (group && group.value) {
    return group.value === 'week' ? 'Week beginning' : group.label;
  } else {
    return '';
  }
};

export {
  attendanceColor,
  attendancePercentageColor,
  attendancePercentageTooltip,
  attendanceText,
  axisFn,
  casesColor,
  casesText,
  complianceValue,
  inspectionsColor,
  inspectionsTooltip,
  inspectionsValid,
  monthAxisFn,
  chartAxisFn,
  locationTypeColor,
  mapChartData,
  mapKeys,
  mapColors,
  locationTypeTooltip,
  sourceColor,
};
