import { Suspense, useEffect, useState } from 'react';
import { Card, Button, Loader } from '..';
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Main.module.scss';
import { routes } from '../../routes';
import { UserModel } from '../../interfaces/user.interface';

export const Main = (): JSX.Element => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setIsLoading(false);
          setError(error?.message);
          throw new Error(error?.message);
        }
      }
    };
    fetchUsers();
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
            {routes.map(({ path, exact, component: Component }) => (
              <Route
                key={path}
                path={path}
                exact
                element={<Component path={path} users={users} isLoading={isLoading} />}
              />
            ))}
            <Route path="*" element={<Navigate to="/users" replace />} />
          </Routes>
        </Suspense>
      </Card>
    </main>
  );
};
