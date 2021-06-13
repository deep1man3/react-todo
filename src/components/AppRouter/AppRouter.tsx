import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error404 from '../../pages/Error404';
import rootRoutes from '../../routes';
import SmartRoute from '../SmartRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {rootRoutes.map((rootRoute) => {
          const { routesList, layout, privacy } = rootRoute;
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
                    privacy={privacy}
                  />
                )}
              />
            ));
          }
        })}
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
