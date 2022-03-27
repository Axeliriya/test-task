import { lazy } from 'react';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /*webpackChunkName: "home-page" */).then(({ HomePage }) => ({
    default: HomePage,
  })),
);
const UserDetailsPage = lazy(() =>
  import('./pages/UserDetailsPage/UserDetailsPage' /*webpackChunkName: "user-details-page" */).then(
    ({ UserDetailsPage }) => {
      return {
        default: UserDetailsPage,
      };
    },
  ),
);
const UsersPage = lazy(() =>
  import('./pages/UsersPage/UsersPage' /*webpackChunkName: "users-page" */).then(
    ({ UsersPage }) => ({
      default: UsersPage,
    }),
  ),
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
