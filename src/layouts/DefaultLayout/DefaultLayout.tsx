import React, { FC } from 'react';
import { LayoutProperties } from '../../types/layouts.types';
import Navbar from "../../components/Navbar";
import SideDrawer from '../../components/SideDrawer';
import MainContainer from '../../components/MainContainer';

const DefaultLayout: FC<LayoutProperties> = ({ Page, route }) => {
  return (
    <div>
      <Navbar>DefaultLayout</Navbar>
      <SideDrawer>DefaultLayout</SideDrawer>
      <MainContainer>
        <Page route={route} />
      </MainContainer>
    </div>
  );
};

export default DefaultLayout;
