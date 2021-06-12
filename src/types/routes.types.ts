import { FC } from 'react';
import { PageProperties } from './pages.types';
import { LayoutProperties } from './layouts.types';

export interface RouteProperties {
  label: string;
  path: string;
  exact?: boolean;
  page: FC<PageProperties>;
}

export interface RootRouteProperties {
  routesList: RouteProperties[];
  layout: FC<LayoutProperties>;
}
