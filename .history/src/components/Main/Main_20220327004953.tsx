import { Card, Button, Loader } from '..';
import { Route, Routes, Navigate } from 'react-router-dom';
import styles from './Main.module.scss';
import {
  FunctionComponent,
  ReactNode,
  Suspense,
  useContext,
  useEffect,
} from 'react';
import { routes } from '../../routes';
import {
  ITestContext,
  TestContext,
  TestContextProvider,
} from '../../context/app.context';

export interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps): JSX.Element => {
  const { users } = useContext(TestContext);

  useEffect(() => {
    console.log(users);
  }, []);

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
      {children}
    </main>
  );
};
