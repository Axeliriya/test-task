import { UsersList, Title } from '../../components';
// import styles from './Main.module.scss';

export const UsersPage = ({path}): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList />
    </>
  );
};
