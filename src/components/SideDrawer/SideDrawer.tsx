import React, { FC } from 'react';
import { Drawer, Toolbar } from '@material-ui/core';

const SideDrawer: FC = ({ children }) => {
  return (
    <Drawer open variant='permanent'>
      <Toolbar />
      {children}
    </Drawer>
  );
};

export default SideDrawer;
