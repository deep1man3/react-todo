import { RouteComponentProps } from 'react-router-dom';
import { ReactNode } from 'react';

export interface PageProperties<T = ReactNode> {
  route: RouteComponentProps<T>;
}