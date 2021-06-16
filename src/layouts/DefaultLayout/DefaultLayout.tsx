import React, { FC } from 'react';
import { Grid, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { LayoutProperties } from '../../types/layouts.types';
import Navbar from '../../components/Navbar';
import SideDrawer from '../../components/SideDrawer';
import MainContainer from '../../components/MainContainer';
import SideWidget from '../../components/SideWidget';
import Logotype from '../../assets/Logotype';

const DefaultLayout: FC<LayoutProperties> = ({ Page, route }) => {
  return (
    <div>
      <Navbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Link component={RouterLink} to="/">
              <Logotype />
            </Link>
          </Grid>
          <Grid item>Логин / Регистрация</Grid>
        </Grid>
      </Navbar>
      <SideDrawer>
        <SideWidget>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aperiam corporis eum illum, inventore
                iure molestias nisi odit quaerat, quia reiciendis repellendus similique sint soluta tempora tempore,
                totam ullam?
            </div>
        </SideWidget>
        <SideWidget>123</SideWidget>
        <SideWidget>123</SideWidget>
      </SideDrawer>
      <MainContainer>
        <Page route={route} />
      </MainContainer>
    </div>
  );
};

export default DefaultLayout;
