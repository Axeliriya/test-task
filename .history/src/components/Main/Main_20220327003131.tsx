import { Card, Button, Loader } from '..';
import { Route, Routes, Navigate } from 'react-router-dom';
import styles from './Main.module.scss';
import { FunctionComponent, Suspense } from 'react';
import { routes } from '../../routes';
import { ITestContext, TestContextProvider } from '../../context/app.context';

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

export const withLayout = <T extends Record<string, unknown> & ITestContext>(
  Component: FunctionComponent<T>,
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <TestContextProvider menu={props.users}>
        <Main>
          <Component {...props} />
        </Main>
      </TestContextProvider>
    );
  };
};
