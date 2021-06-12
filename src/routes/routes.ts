import { publicRoutes } from './public.routes';
import DefaultLayout from '../layouts/DefaultLayout';
import { PrivacyType, RootRouteProperties } from '../types/routes.types';
import { privateRoutes } from './private.routes';
import { sessionRoutes } from "./session.routes";

const rootRoutes: RootRouteProperties[] = [
  {
    routesList: publicRoutes,
    layout: DefaultLayout,
    privacy: PrivacyType.Public,
  },
  {
    routesList: privateRoutes,
    layout: DefaultLayout,
    privacy: PrivacyType.Private,
  },
  {
    routesList: sessionRoutes,
    layout: DefaultLayout,
    privacy: PrivacyType.Session,
  },
];

export default rootRoutes;
