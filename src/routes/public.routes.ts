import Home from "../pages/Home";
import { RouteProperties } from "../types/routes.types";

export const publicRoutes: RouteProperties[] = [
  {
    label: "Главная",
    exact: true,
    path: "/",
    page: Home,
  },
];