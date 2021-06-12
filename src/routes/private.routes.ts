import { RouteProperties } from "../types/routes.types";
import Dashboard from "../pages/Dashboard";

export const privateRoutes: RouteProperties[] = [
    {
        label: "Панель управления",
        exact: true,
        path: "/dashboard",
        page: Dashboard,
    },
];