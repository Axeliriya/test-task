import { lazy } from 'react';

// const HomePage = lazy(() => import('./views/HomePage' /*webpackChunkName: "home-page" */));
// const MovieDetailsPage = lazy(
//   () => import('./views/MovieDetailsPage' /*webpackChunkName: "movie-details-page" */),
// );
// const MoviesPage = lazy(() => import('./views/MoviesPage' /*webpackChunkName: "movies-page" */));

// const Cast = lazy(() => import('./components/Cast' /*webpackChunkName: "details-cast" */));
// const Reviews = lazy(() => import('./components/Reviews' /*webpackChunkName: "details-reviews" */));
// const MoviesList = lazy(
//   () => import('./components/MoviesList' /*webpackChunkName: "movie-details-page" */),
// );

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
    redirect: '/users',
  },
  {
    path: '/users/:usersId',
    label: 'Users Details',
    component: UsersDetailsPage,
  },
  {
    path: '/users',
    label: 'Users',
    component: UsersPage,
  },
];
