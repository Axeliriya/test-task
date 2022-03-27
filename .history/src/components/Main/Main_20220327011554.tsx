import { Card, Button, Loader } from '..';
import { Route, Routes, Navigate } from 'react-router-dom';
import styles from './Main.module.scss';
import { Suspense, useContext, useEffect } from 'react';
import { routes } from '../../routes';
import {
  ITestContext,
  TestContext,
  TestContextProvider,
} from '../../context/app.context';

export const Main = (): JSX.Element => {
  const { users } = useContext(TestContext);

  useEffect(() => {
    console.log(users);
  }, [users]);

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
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Suspense>
      </Card>
    </main>
  );
};

export const withLayout = <
  T extends Record<string, unknown> & ITestContext,
>() => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <TestContextProvider users={props.users}>
        <Main />
      </TestContextProvider>
    );
  };
};
