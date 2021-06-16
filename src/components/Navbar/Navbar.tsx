import React, { FC } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { useStyles } from "./Navbar.styles";

const Navbar: FC = ({ children }) => {

  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

export default Navbar;
