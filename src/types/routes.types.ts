import { FC } from "react";

export interface RouteProperties {
    label: string;
    path: string;
    exact?: boolean;
    page?: FC;
}