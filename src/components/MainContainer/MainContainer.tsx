import React, { FC } from 'react';
import { Container, Toolbar } from '@material-ui/core';
import { useStyles } from './MainContainer.styles';

const MainContainer: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container>
      <Toolbar className={classes.toolbar}/>
      {children}
    </Container>
  );
};

export default MainContainer;
