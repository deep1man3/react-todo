import { publicRoutes } from './public.routes';
import DefaultLayout from '../layouts/DefaultLayout';
import { RootRouteProperties } from '../types/routes.types';
import { privateRoutes } from './private.routes';

const rootRoutes: RootRouteProperties[] = [
  {
    routesList: publicRoutes,
    layout: DefaultLayout,
  },
  {
    routesList: privateRoutes,
    layout: DefaultLayout,
  },
];

export default rootRoutes;
