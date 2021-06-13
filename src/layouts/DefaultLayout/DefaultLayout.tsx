import React, { FC } from 'react';
import { LayoutProperties } from '../../types/layouts.types';
import Navbar from "../../components/Navbar";

const DefaultLayout: FC<LayoutProperties> = ({ Page, route }) => {
  return (
    <div>
      <Navbar>DefaultLayout</Navbar>
      <Page route={route} />
    </div>
  );
};

export default DefaultLayout;
