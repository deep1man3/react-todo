import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rootRoutes from '../../routes';
import SmartRoute from '../SmartRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {rootRoutes.map((rootRoute) => {
          const { routes: routesList, layout } = rootRoute;
          {
            return routesList.map((appRoute) => (
              <Route
                key={appRoute.path}
                exact={appRoute.exact}
                path={appRoute.path}
                render={(route) => (
                  <SmartRoute
                    route={route}
                    layout={layout}
                    appRoute={appRoute}
                  />
                )}
              />
            ));
          }
        })}
        <Route>404</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
