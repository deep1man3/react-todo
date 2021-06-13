import { RouteProperties } from '../types/routes.types';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const sessionRoutes: RouteProperties[] = [
  {
    label: 'Авторизация',
    exact: true,
    path: '/signin',
    page: SignIn,
  },
  {
    label: 'Регистрация',
    exact: true,
    path: '/signup',
    page: SignUp,
  },
];
