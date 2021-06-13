import React, { FC } from 'react';
import { LayoutProperties } from '../../types/layouts.types';
import Navbar from "../../components/Navbar";
import SideDrawer from "../../components/SideDrawer";

const DefaultLayout: FC<LayoutProperties> = ({ Page, route }) => {
  return (
    <div>
      <Navbar>DefaultLayout</Navbar>
      <SideDrawer>DefaultLayout</SideDrawer>
      <Page route={route} />
    </div>
  );
};

export default DefaultLayout;
