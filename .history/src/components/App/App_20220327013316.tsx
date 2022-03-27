import styles from './App.module.scss';
import { Main } from '..';
import { TestContextProvider } from '../../context/app.context';

export const App = (props: any): JSX.Element => {
  return (
    <TestContextProvider
      users={props.users}
      error={props.error}
      isLoading={props.isLoading}
    >
      <div className={styles.app}>
        <Main />
      </div>
    </TestContextProvider>
  );
};
