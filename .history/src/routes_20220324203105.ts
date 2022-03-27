import { lazy } from 'react';


const UsersPage = lazy(() =>
  import('./pages/UsersPage/UsersPage' /*webpackChunkName: "users-page" */).then(
    ({ UsersPage }) => ({
      default: UsersPage,
    }),
  ),
);

const UserDetailsPage = lazy(() =>
  import('./pages/UserDetailsPage/UserDetailsPage' /*webpackChunkName: "user-details-page" */).then(
    ({ UserDetailsPage }) => ({
      default: UserDetailsPage,
    }),
  ),
);

export const routes = [
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
