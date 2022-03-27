import { UsersList, Title, withLayout } from '../components';

export const UsersPage = (): JSX.Element => {
  return (
    <>
      <Title>Список Пользователей</Title>
      <UsersList />
    </>
  );
};

export default withLayout(UsersPage);
