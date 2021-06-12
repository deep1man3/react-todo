import { publicRoutes } from "./public.routes";
import DefaultLayout from "../layouts/DefaultLayout";

const rootRoutes = [
  {
    routes: publicRoutes,
    layout: DefaultLayout,
  },
];

export default rootRoutes;
