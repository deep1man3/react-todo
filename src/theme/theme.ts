import { createMuiTheme, ThemeOptions } from "@material-ui/core";

interface MuiThemeOptions extends ThemeOptions {
  drawer?: {
    width: number;
  };
}

const theme: MuiThemeOptions = {
  drawer: {
    width: 280,
  },
};

export default createMuiTheme(theme);
