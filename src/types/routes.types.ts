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
  privacy: PrivacyType;
}

export enum PrivacyType {
  Public = 'Public',
  Private = 'Private',
}

export const isPublicRoute = (privacy: PrivacyType) =>
  privacy === PrivacyType.Public;
export const isPrivateRoute = (privacy: PrivacyType) =>
  privacy === PrivacyType.Private;
