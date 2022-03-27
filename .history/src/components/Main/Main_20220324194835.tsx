import { Suspense } from 'react';
import { Card, Button } from '..';
import styles from './Main.module.scss';

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
            <div className="spinner">
              <Loader type="ThreeDots" color="#999999" height={50} width={150} />
            </div>
          }
        >
          {loading ? (
            <div className="spinner">
              <Loader type="Oval" color="#999999" height={50} width={50} />
            </div>
          ) : error ? (
            <p>Server is not responding</p>
          ) : (
            <Switch>
              {routesQuery.map(({ path, exact, component: Component }) => (
                <Route
                  key={path}
                  path={`${this.props.match.path}`}
                  exact={exact}
                  render={props => <Component {...props} movies={movies} search={search} />}
                />
              ))}
            </Switch>
          )}
        </Suspense>
      </Card>
    </main>
  );
};
