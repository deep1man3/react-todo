import React, { FC } from 'react';
import { LayoutProperties } from '../../types/layouts.types';

const SessionLayout: FC<LayoutProperties> = ({ Page, route }) => {
  return (
    <div>
      SessionLayout
      <Page route={route} />
    </div>
  );
};

export default SessionLayout;
