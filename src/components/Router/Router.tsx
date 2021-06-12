import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rootRoutes from '../../routes';
import SmartRouter from '../SmartRouter/SmartRouter';

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
                  <SmartRouter
                    route={route}
                    layout={layout}
                    appRoute={appRoute}
                  />
                )}
              />
            ));
          }
        })}
        ;<Route>404</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
