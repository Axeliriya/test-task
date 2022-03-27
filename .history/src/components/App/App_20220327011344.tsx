import styles from './App.module.scss';
import { Main } from '..';

export const App = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <Main />
    </div>
  );
};


