import { Card, Button, UsersList } from '..';
import { Title } from '..';
import styles from './Main.module.scss';

export const Main = (): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList />
    </>
  );
};
