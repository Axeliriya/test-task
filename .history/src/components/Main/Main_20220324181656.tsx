import { Card, Button, UsersList } from '..';
import { Title } from '..';
import styles from './Main.module.scss';

export const Main = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Card className={styles.sort} color="gray" >
        <span>Сортировка</span>
        <Button appearance="primary" text="по городу" />
        <Button appearance="primary" text="по компании" />
      </Card>
      <Card className={styles.users}>
        <Title>Список Пользователей</Title>
        <UsersList />
      </Card>
    </main>
  );
};
