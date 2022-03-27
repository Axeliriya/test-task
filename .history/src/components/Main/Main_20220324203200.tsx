import { Suspense } from 'react';
import { Card, Button } from '..';
import { RotatingLines } from 'react-loader-spinner';
import { Route, Routes, Navigate } from 'react-router-dom';
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
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to="/users" replace />} />
          </Routes>
        </Suspense>
      </Card>
    </main>
  );
};
