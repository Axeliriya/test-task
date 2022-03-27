import { Card } from '..';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Card color="gray" />
      <Card color="white" />
    </main>
  );
};
