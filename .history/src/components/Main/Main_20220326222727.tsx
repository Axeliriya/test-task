import { Card, Button, Loader } from '..';
import { Route, Routes, Navigate } from 'react-router-dom';
import styles from './Main.module.scss';
import { Suspense } from 'react';
import { routes } from '../../routes';
import { SortEnum } from '../UsersList/sort.reducer';

export const Main = (): JSX.Element => {
  const setSort = (sort: SortEnum, dispatch: any) => {
    dispatch({ type: sort });
  };

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
            <Route path="/" element={<Navigate to="/users" replace />} />
            {routes.map(({ path, component: Component }) => (
              <Route
                key={path}
                setSort={setSort}
                path={path}
                element={<Component />}
              />
            ))}
          </Routes>
        </Suspense>
      </Card>
    </main>
  );
};
