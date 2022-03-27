import { Card } from '..';
import styles from './Main.module.scss';

export const Main = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Card color="gray">sort</Card>
      <Card>users</Card>
    </main>
  );
};
