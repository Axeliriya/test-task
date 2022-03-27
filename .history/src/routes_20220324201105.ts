import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage' /*webpackChunkName: "home-page" */));
const UserDetailsPage = lazy(
  () =>
    import('./pages/UserDetailsPage/UserDetailsPage' /*webpackChunkName: "user-details-page" */),
);
const UsersPage = lazy(
  () => import('./pages/UsersPage/UsersPage' /*webpackChunkName: "users-page" */),
);

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
    redirect: '/users',
  },
  {
    path: '/users/:userId',
    label: 'User Details',
    component: UserDetailsPage,
  },
  {
    path: '/users',
    label: 'Users',
    component: UsersPage,
  },
];
