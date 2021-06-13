import React, { FC } from 'react';
import Appbar from '../../components/Appbar';
import { LayoutProperties } from '../../types/layouts.types';

const SessionLayout: FC<LayoutProperties> = ({ Page, route }) => {
  return (
    <div>
      <Appbar>SessionLayout</Appbar>
      <Page route={route} />
    </div>
  );
};

export default SessionLayout;
