import { Card, Button, Loader } from '..';
import { Route, Routes, Navigate } from 'react-router-dom';
import styles from './Main.module.scss';
// import { routes } from '../../routes';
// import { UserModel } from '../../interfaces/user.interface';
import { lazy, Suspense } from 'react';

const UsersPage = lazy(() =>
  import('../../pages/UsersPage' /*webpackChunkName: "users-page" */).then(
    ({ UsersPage }) => ({
      default: UsersPage,
    }),
  ),
);

const UserDetailsPage = lazy(() =>
  import(
    '../../pages/UserDetailsPage' /*webpackChunkName: "user-details-page" */
  ).then(({ UserDetailsPage }) => ({
    default: UserDetailsPage,
  })),
);

export const Main = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Card className={styles.sort} color="gray">
        <span>Сортировка</span>
        <Button appearance="primary" text="по городу" />
        <Button appearance="primary" text="по компании" />
      </Card>
      <Card className={styles.users}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="users/*" element={<UsersPage />}>
              <Route path=":userId" element={<UserDetailsPage />} />
            </Route>
            <Route path="/" element={<Navigate to="/users" replace />} />
          </Routes>
        </Suspense>
      </Card>
    </main>
  );
};
