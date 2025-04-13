export const lightTheme = {
  name: 'light',
  colors: {
    background: '#FFFFFF',
    text: '#121212',
    primary: '#1E90FF',
    secondary: '#FF69B4',
  },
};

export const darkTheme = {
  name: 'dark',
  colors: {
    background: '#121212',
    text: '#FFFFFF',
    primary: '#1E90FF',
    secondary: '#FF69B4',
  },
};

export type ThemeType = typeof lightTheme;
