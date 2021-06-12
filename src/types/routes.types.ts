import { FC } from "react";
import { PageProperties } from "./pages.types";

export interface RouteProperties {
    label: string;
    path: string;
    exact?: boolean;
    page: FC<PageProperties>;
}