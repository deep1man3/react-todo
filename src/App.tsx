import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import AppRouter from './components/AppRouter';
import theme from './theme';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppRouter />
    </MuiThemeProvider>
  );
};

export default App;
