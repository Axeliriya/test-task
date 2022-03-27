import { Suspense } from 'react';
import { Card, Button } from '..';
import { RotatingLines } from 'react-loader-spinner';
import { Route, Routes } from 'react-router-dom';
import styles from './Main.module.scss';
import { routes } from '../../routes';

export const Main = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Card className={styles.sort} color="gray">
        <span>Сортировка</span>
        <Button appearance="primary" text="по городу" />
        <Button appearance="primary" text="по компании" />
      </Card>
      <Card className={styles.users}>
        <Suspense
          fallback={
            <div className={styles.spinner}>
              <RotatingLines width="40" />
            </div>
          }
        >
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route
                key={path}
                path={path}
                element={path === '/' ? <Component to="/users" replace /> : <Component />}
              />
            ))}
          </Routes>
        </Suspense>
      </Card>
    </main>
  );
};
