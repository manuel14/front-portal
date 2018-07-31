export const color = {
  danger: '#FF4E4E',
  warning: '#FFC758',
  success: '#4FC47D',
  default: '#C7C7C7',
  lightGrey: '#eeeeee',
  grey: '#a4a4a4',
  darkGrey: '#373737',
  lightBlue: '#02a5fc',
  blue: '#006aa3',
  midBlue: '#005482',
  darkBlue: '#004164',
  chart1: '#ff4ea7',
  chart2: '#613DC1 ',
  chart3: '#5890ff',
  chart4: '#FFA5A5',
  chart5: '#342E37',
};

export function colorByName(name) {
  switch (name) {
    case 'red':
      return color.danger;
    case 'yellow':
      return color.warning;
    case 'green':
      return color.success;
    case 'lightGrey':
      return color.lightGrey;
    case 'grey':
      return color.grey;
    case 'darkGrey':
      return color.darkGrey;
    case 'lightBlue':
      return color.lightBlue;
    case 'blue':
      return color.blue;
    case 'darkBlue':
      return color.darkBlue;
    default:
      return color.default;
  }
}
