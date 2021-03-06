import React, { FC, ReactNode } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { LayoutProperties } from '../../types/layouts.types';
import { isPrivateRoute, isSessionRoute, PrivacyType, RouteProperties } from "../../types/routes.types";
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

  /**
   * Если маршрут приватный и пользователь не авторизован,
   * выводить 403 ошибку
   */
  if (isPrivateRoute(privacy) && !authenticated) {
    return <Layout Page={Error403} route={route} />
  }

  /**
   * Если маршрут ссесия и пользователь авторизован,
   * делать редирект на панель управления
   */
  if (isSessionRoute(privacy) && authenticated) {
    return <Redirect to='/dashboard'/>
  }

  /**
   * Если маршрут публичный
   */
  return <Layout Page={appRoute.page} route={route} />;
};

export default SmartRoute;
