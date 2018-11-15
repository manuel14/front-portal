const baseTheme = {
  breakpoints: [40, 52, 64, 76],
};

const darkTheme = {};

export function getTheme(name) {
  switch (name) {
    case 'dark':
      return { ...baseTheme, ...darkTheme };
    default:
      return baseTheme;
  }
}

export const color = {
  textPrimary: '#999999',
  background: '#f5f5f5',
  primary: '#006aa3', // blue
  primaryDark: '#005482', // dark blue
  primaryLight: '#1978ac', // light blue
  danger: '#A30019',
  warning: '#db9027',
  success: '#1f861f',
  info: '#5bc0de',
  neutral: '#ddd',
  dark: {
    textPrimary: '#ffffff',
  },
  boxShadow: '3px 3px 5px 0px rgba(112,112,112,0.5)',
};

export const font = {
  size: '14px',
  transform: 'uppercase',
};

export const button = {
  textColor: '#ffffff',
  textTransform: 'uppercase',
  background: '#d6d6d6',
  border: 0,
  padding: '4px 8px',
  toolbarBtn: {
    background: '#006aa3',
    border: '1px solid #1978ac',
  },
};

export const notificationsStyle = {
  Containers: {
    DefaultStyle: {
      width: 400,
      padding: '0 16px 16px 16px',
    },
  },
  NotificationItem: {
    DefaultStyle: {
      borderRadius: 0,
      margin: '16px 0 0',
      padding: '16px',
      borderTop: 0,
      backgroundColor: '#555',
      color: '#fff',
    },
    error: {
      backgroundColor: '#A30019',
    },
  },
  Title: {
    DefaultStyle: {
      color: '#fff',
    },
  },
  Dismiss: {
    DefaultStyle: {
      backgroundColor: 'transparent',
      borderRadius: 0,
      color: '#fff',
    },
  },
};
