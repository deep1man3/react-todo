import React, { FC, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { LayoutProperties } from '../../types/layouts.types';
import { RouteProperties } from '../../types/routes.types';

interface SmartRouterProperties<T = ReactNode> {
  appRoute: RouteProperties;
  layout: FC<LayoutProperties>;
  route: RouteComponentProps<T>;
}

const SmartRouter: FC<SmartRouterProperties> = ({
  appRoute,
  layout: Layout,
  route,
}) => {
  return <Layout Page={appRoute.page} route={route} />;
};

export default SmartRouter;
