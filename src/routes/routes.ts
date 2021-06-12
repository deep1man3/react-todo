import { publicRoutes } from './public.routes';
import DefaultLayout from '../layouts/DefaultLayout';
import { RootRouteProperties } from '../types/routes.types';

const rootRoutes: RootRouteProperties[] = [
  {
    routesList: publicRoutes,
    layout: DefaultLayout,
  },
];

export default rootRoutes;
