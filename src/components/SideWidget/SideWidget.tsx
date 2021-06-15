import React, { FC } from 'react';
import { Divider } from '@material-ui/core';
import { useStyles } from './SideWidget.styles';

const SideWidget: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.widget}>{children}</div>
      <Divider />
    </>
  );
};

export default SideWidget;
