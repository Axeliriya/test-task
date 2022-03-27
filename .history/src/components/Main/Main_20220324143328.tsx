import { Card, Button, UsersList } from '..';
import { Title } from '..';
import styles from './Main.module.scss';

export const Main = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Card color="gray" className={styles.sort}>
        <span>Сортировка</span>
        <Button appearance="primary" text="по городу" />
        <Button appearance="primary" text="по компании" />
      </Card>
      <Card>
        <Title>Список Пользователей</Title>
        <UsersList />
      </Card>
    </main>
  );
};
