/* eslint-disable */
import { createMuiTheme } from '@material-ui/core';

declare module '@material-ui/core/styles/createMuiTheme' {
  export interface ThemeOptions {
    drawer: {
      width: number;
    };
  }
}

const theme = {
  drawer: {
    width: 280,
  },
};

export default createMuiTheme(theme);