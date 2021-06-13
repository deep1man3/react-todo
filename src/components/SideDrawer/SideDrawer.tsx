import React, { FC } from 'react';
import { Drawer, Toolbar } from '@material-ui/core';
import { useStyles } from './SideDrawer.styles';

const SideDrawer: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Drawer
      open
      variant="permanent"
      className={classes.root}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      {children}
    </Drawer>
  );
};

export default SideDrawer;
