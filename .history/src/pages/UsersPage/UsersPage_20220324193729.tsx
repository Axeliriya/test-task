import { Card, Button, UsersList, Title } from '../../components';
import {} from '..';
// import styles from './Main.module.scss';

export const UsersPage = (): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList />
    </>
  );
};
