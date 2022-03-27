import { Card, Button, Loader } from '..';
import { Route, Routes, Navigate } from 'react-router-dom';
import styles from './Main.module.scss';
import { Suspense, useContext, useEffect, useReducer } from 'react';
import { routes } from '../../routes';
import { TestContext } from '../../context/app.context';
import { SortEnum, sortReducer } from './sort.reducer';

export const Main = (): JSX.Element => {
  const { users } = useContext(TestContext);

  useEffect(() => {
    console.log(users);
  }, [users]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, dispatchUsers] = useReducer(sortReducer, {
    users,
    sort: SortEnum.Name,
  });

  const setSort = (sort: SortEnum) => {
    dispatchUsers({ type: sort });
  };

  useEffect(() => {
    dispatchUsers({ type: 'reset', initialState: users });
  }, [users]);

  return (
    <main className={styles.main}>
      <Card className={styles.sort} color="gray">
        <span>Сортировка</span>
        <Button
          onClick={() => setSort(SortEnum.Name)}
          appearance="primary"
          text="по имени"
        />
        <Button
          onClick={() => setSort(SortEnum.City)}
          appearance="primary"
          text="по городу"
        />
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

// export const withLayout = <
//   T extends Record<string, unknown> & ITestContext,
// >() => {
//   return function withLayoutComponent(props: T): JSX.Element {
//     return (

//         <Main {...props} />

//     );
//   };
// };
