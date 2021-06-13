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
  Session = 'Session',
}

export const isPublicRoute = (privacy: PrivacyType) =>
  privacy === PrivacyType.Public;
export const isPrivateRoute = (privacy: PrivacyType) =>
  privacy === PrivacyType.Private;
export const isSessionRoute = (privacy: PrivacyType) =>
  privacy === PrivacyType.Session;
