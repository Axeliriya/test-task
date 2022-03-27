import styles from './App.module.scss';
import { Main } from '..';
import { ITestContext, TestContextProvider } from '../../context/app.context';

export const App = ({
  users,
  error,
  isLoading,
}: ITestContext | {}): JSX.Element => {
  return (
    <TestContextProvider users={users} error={error} isLoading={isLoading}>
      <div className={styles.app}>
        <Main />
      </div>
    </TestContextProvider>
  );
};
