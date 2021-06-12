import { FC, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageProperties } from './pages.types';

export interface LayoutProperties {
    Page: FC<PageProperties>;
    route: RouteComponentProps<ReactNode>;
}