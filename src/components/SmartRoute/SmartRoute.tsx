import React, { FC, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { LayoutProperties } from '../../types/layouts.types';
import { isPrivateRoute, PrivacyType, RouteProperties } from "../../types/routes.types";
import Error403 from "../../pages/Error403";

interface SmartRouterProperties<T = ReactNode> {
  appRoute: RouteProperties;
  layout: FC<LayoutProperties>;
  route: RouteComponentProps<T>;
  privacy: PrivacyType
}

const SmartRoute: FC<SmartRouterProperties> = ({
  appRoute,
  layout: Layout,
  route,
  privacy
}) => {

  const authenticated = false;

  if (isPrivateRoute(privacy) && !authenticated) {
    return <Layout Page={Error403} route={route} />
  }

  return <Layout Page={appRoute.page} route={route} />;
};

export default SmartRoute;
