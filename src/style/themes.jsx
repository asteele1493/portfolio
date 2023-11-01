import { createTheme } from '@mui/material/styles';

const themes = createTheme({
  palette: {
    primary: {
      main: '#2E5458', // Primary color
    },
    secondary: {
      main: '#2E5458', // Secondary color
    },
    background: {
      default: '#F1E1C1', // Background color
    },
    text: {
      primary: '#2E5458', // Text color
    },
  },
  typography: {
    fontFamily: 'Monospace',
    h1: {
      fontFamily: 'Helvetica',
      fontSize: '4rem', // Adjust the font size as needed
    },
    h2: {
      fontFamily: 'Monospace',
      fontSize: '4rem', // Adjust the font size as needed
    },
    h3: {
      fontFamily: 'Monospace',
      fontSize: '1.75rem', // Adjust the font size as needed
    },
    body1: {
      fontFamily: 'Monospace',
      fontSize: '1rem', // Adjust the font size as needed
    },
  },
});

export default themes;
