import { FC } from "react";

export interface RouteProperties {
    label: string;
    path: string;
    exact?: boolean;
    layout?: FC;
}